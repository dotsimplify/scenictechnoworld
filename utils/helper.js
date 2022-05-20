import axios from "axios";

export const formateDate = (date) => {
  const dateStr = new Date(date).toLocaleDateString("en-in", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return dateStr;
};

export const smallString = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};

export const onchangeHandler = (value, setState, setError) => {
  if (value.target.value != "") {
    setState(value.target.value);
    setError(false);
  }
};

export const onblurHandler = (value, setError) => {
  if (value.target.value === "") {
    setError(true);
  }
};

export const onSubmitHandler = async (
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  message,
  setMessage,
  setnameError,
  setphoneError,
  setemailError,
  setmessageError,
  setStatus
) => {
  if (!name) {
    setnameError(true);
  } else {
    if (!phone) {
      setphoneError(true);
    } else {
      if (!email) {
        setemailError(true);
      } else {
        if (!message) {
          setmessageError(true);
        } else {
          setStatus("Sending.....");
          await axios
            .post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/leads`, {
              name: name,
              email: email,
              phone: phone,
              message: message,
            })
            .then((res) => {
              setName("");
              setPhone("");
              setEmail("");
              setMessage("");
              setStatus("Sent");
            })
            .catch((e) => {
              console.log(e);
            });
        }
      }
    }
  }
};
