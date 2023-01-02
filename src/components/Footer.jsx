import React from "react";
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillYoutube,
    AiOutlineArrowUp,
} from "react-icons/ai";


const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/25058652"}
          alt="Founder"
        />

        <h2>Sameer Srivastava</h2>
        <p>Motivation is temporary, but discipline last forever.</p>

      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
            <a href="http://youtube.com" target={"blank"} >
                <AiFillYoutube/>
            </a>
            <a href="http://instagram.com" target={"blank"} >
                <AiFillInstagram/>
            </a>
            <a href="http://github.com.com" target={"blank"} >
                <AiFillGithub/>
            </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp/>
      </a>
    </footer>
  );
};

export default Footer;
