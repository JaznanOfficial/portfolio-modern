import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/JaznanOfficial",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/jaznanofficial/",
  },
  {
    icon: <FaBluesky />,
    path: "https://bsky.app/profile/jaznanofficial.bsky.social",
  },
  {
    icon: <FaFacebookF />,
    path: "https://www.facebook.com/abdurrahman.jaznanofficial",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            href={item.path}
            key={index}
            target="_blank"
            className={iconStyles}
          >
            <span>{item.icon}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
