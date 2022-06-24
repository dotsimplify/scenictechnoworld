import { FaCrown } from "react-icons/fa";
import {
  MdOutlineSettingsSuggest,
  MdOutlineScreenSearchDesktop,
} from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";

export const sharingData = {
  first: [
    {
      id: 0,
      title: " Market-leading 3D player for the web.",
      icon: <FaCrown />,
    },
    {
      id: 1,
      title: "  Interactive and configurable, VR and AR ready..",
      icon: <MdOutlineSettingsSuggest />,
    },
  ],
  second: [
    {
      id: 2,
      title: " Easy to use and fast",
      icon: <MdOutlineScreenSearchDesktop />,
    },
    {
      id: 3,
      title:
        "Embeddable everywhere, for eCommerce, advertising and social media.",
      icon: <BsCodeSlash />,
    },
  ],
};
