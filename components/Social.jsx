import Link from "next/link"

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: "https://github.com/Busan24"},
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/budy-santoso-48305a345/"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/budysantoso24_?igsh=YWVpdXRjN3Z4ZTVt"},
]

const Social = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index)=>{
        return (
        <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
        );
    })}

  </div>
}

export default Social
