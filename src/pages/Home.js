import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";


function Home() {
  return (
    <div className='home' >
   <div className='about'> 
  <h2>Hi, My Name is Je'Rontai Mcfee</h2>
  <div className='prompt'> 
   <p>
   I am a very passionate student participating in the Georgia Institute of Technology full-stack web development certification program. I have developed and Honed my skills in their Full-stack Web Developer program.  </p>
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
   </div>
<div className='skills'>
  <h1>Skills</h1>
  <ol className='list'>
    <li className='item'>
      <h2>
        Front-End
      </h2>
      <span>
      ReactJS, Angular, HTML, CSS,   NPM,
               BootStrap,  StyledComponents and willing to learn more.
      </span>
      </li>
      <li className='item'>
        <h2>Back-End</h2>
        <span>
        NodeJS, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, and willing to learn more.
        </span>
      </li>
      <li className='item'>
        <h2>Languages</h2>
        Javascript, Python, ReactJS
      </li>
      </ol>
      
</div>
</div> 
    
  );
}

export default Home;
