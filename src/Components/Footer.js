import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/jerontai-mcfee-45809859">
   <LinkedInIcon />
   </a>
   <a href="mailto:jerontai07@gmail.com">
   <EmailIcon />
   </a>
   <a href="https://github.com/Jerontai-Mcfee">
   <GithubIcon />
   </a>
      </div>
      <p> &copy; 2023 jeroTech.com </p> 
      <p>  Phone Number: 678-254-8000     Email: jerontai07@gmail.com </p>
      
    </div>
  );
}

export default Footer;
