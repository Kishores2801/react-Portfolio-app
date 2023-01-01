import React, {useState, useEffect} from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';


import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';

import './About.scss';



const About = () => {


  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);



  return (
  <>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <h2 className="head-text">I Know that <span>Good Insights </span> <br/> are required for <span>Good Decisions</span>
    </h2>

    <div className='app__profiles'>
      {abouts.map((about,index) => (
        <motion.div
          whileInView={{opacity:1}}
          whileHover={{scale: 1.1}}
          transition={{duration:0.5, type: 'tween'}}
          className="app__profile-item"
          key={about.title + index}>
            <img src={urlFor(about.imgUrl)} alt={about.title}></img>
            <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
            <p className="p-text" style={{marginTop: 20}}>{about.description}</p>
          </motion.div>

          

      ))}




  <div className="about_container">
    <h2 className="head-text">More about <span>me</span></h2>
    <br/><br/>
    <p className="p-text">
    I'm a working professional with BBA(Hons) specialization in Business Analytics at SLIIT and currently working as an Survey Insights Associate at "Stax Asia" more than a year. 
    <br/> I'm an enthusiastic and self-motivated individual, who can adapt to any given situation and, able to perform as a team player to work toward reaching desired goals. I'm curious about constantly learning to improve my new skills.</p>
      
  </div>

  <div class="timeline">
                        <div class="timeline-item">
                            <div class="tl-icon">
                                <i class="fa-solid fa-briefcase"></i>
                            </div>
                            <p class="tl-duration"> 2021 - Present</p>
                            <h4>Primary Insights Associate - <span> Stax Asia </span></h4>
                            <p> </p><ul>
                                <li> Developing &amp; Programming Customized Questionaires to gather data from target sample market.
                                </li><li> Developing Custom SPSS Syntaxes to Clean and analyze data to gain meaningful insights.
                                </li><li> Processing a range documentation to manage projects effectively.
                                </li><li> Cordinating and Managing with Teams in US to complete the project and the delieverables to clients on time.
                                </li></ul>
                            <p></p>
                        </div>
                        <div class="timeline-item">
                            <div class="tl-icon">
                                <i class="fa-solid fa-briefcase"></i>
                            </div>
                            <p class="tl-duration"> Nov 2019 - Mar 2020</p>
                            <h4>Survey Insights Intern - <span> Stax Asia </span></h4>
                            <p> </p><ul>
                                <li> Programming Customized Surveys to gather data from target sample market.
                                </li><li> Developing Custom SPSS Syntaxes to Clean and analyze data to gain meaningful insights.
                                </li><li> Processing a range documentation to manage projects effectively.
                                </li></ul>
                            <p></p>
                        </div>

                        <div class="timeline-item">
                            <div class="tl-icon">
                                <i class="fa-solid fa-briefcase"></i>
                            </div>
                            <p class="tl-duration"> Nov 2019 - Mar 2020</p>
                            <h4>Digital Customer Service Intern - <span> DARAZ Srilanka </span></h4>
                            <p> </p><ul>
                                <li> Responding promptly to customer Inquiries.
                                </li><li> Handling and resolving customer complaints by delegating to relevant department.
                                </li><li> Managing the Digital media presence Daraz Srilanka.
                                </li></ul>
                            <p></p>
                        </div>
                    </div>
</div>


  
</>
    
    
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);