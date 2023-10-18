import './index.scss'
//import '../Layout/index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons'
const About = () =>{
    const[letterClass,setLetterClass]=useState('text-animate')
    useEffect(()=>{
        setTimeout(()=>{
           setLetterClass('text-animate-hover')
       },3000)
   },[])
    return(
        <>
        <div className='container about-page'>
           <div className='text-zone'>
            <h1>
              <AnimatedLetters
                 letterClass={letterClass}
                 strArray={['A','b','o','u','t',' ','m','e']}
                 idx={15}
              />  
            </h1>
            <p>Hello, I am Sidharth, a passionate and dedicated student currently pursuing my bachelor's degree
                 at the prestigious Indian Institute of Technology (IIT) Indore. I am set to graduate in 2024, 
                 and I am enthusiastic about sharing my skills and knowledge in the world of technology.  </p>
            <p>My primary expertise lies in web development. I have a strong command of HTML, CSS, and JavaScript,
                 which allows me to craft beautiful, interactive, and user-friendly web experiences. I'm also well-versed in
                  ReactJS, a powerful library that enhances the efficiency and performance of web applications.</p>
            <p>In addition to web development, I have a solid foundation in computer science fundamentals. I excel in C++ and have a deep understanding of data structures and algorithms. This knowledge equips me with problem-solving abilities and a keen analytical mindset, making me a versatile and resourceful developer.</p>
           </div>
           <div className='stage-cube-cont'>
            <div className='cubespinner'>
            <div className='face1'>
                <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
            </div>
            <div className='face2'>
                <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
            </div>
            <div className='face3'>
                <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
            </div>
            <div className='face4'>
                <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
            </div>
            <div className='face5'>
                <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
            </div>
            <div className='face6'>
                <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
            </div>
            </div>
           </div>
        
        </div>
        <Loader type="pacman"/>
        </>
    )
}
export default About
