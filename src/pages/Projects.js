import blogICON from '../components/blogICON.png';
import wasteManager from '../components/wasteManager.png';
import chatIcon from '../components/chatIcon.png';

const projects = [
  {
    title: "Fresh-Insights",
    description: "Blogging Application",
    github: "See Github",
    src: "https://github.com/Leventcure20/Fresh-Insights",
    image: blogICON, // Use the imported variable
  },
  {
    title: "Smartbin Plus",
    description: "Waste Manager",
    github: "See Github",
    src: "https://github.com/Leventcure20/SmartBin-Plus",
    image: wasteManager, // Use the imported variable
  },
  {
    title: "WebTalk",
    description: "Chat Application",
    github: "See Github",
    src: "https://github.com/selbeyhan/MessagingWebApp",
    image: chatIcon, // Use the imported variable
  },
];

export default projects;