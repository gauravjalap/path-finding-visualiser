import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="footer bg-dark py-3 mt-auto">
      <div class="container text-center">
        <span class="text-muted">
          Made with ❤️ by Gaurav Kumar{" "}
          <a href="https://github.com/gauravjalap/">
            <FaGithub />
          </a>{" "}
          <a href="https://www.linkedin.com/in/heyiamgaurav/">
            <FaLinkedin />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
