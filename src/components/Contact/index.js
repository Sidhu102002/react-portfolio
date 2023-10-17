import AnimatedLetters from '../AnimatedLetters'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './index.scss'
import Loader from 'react-loaders'
import { useEffect,useRef,useState } from 'react'
import emailjs from'@emailjs/browser'
const Contact =()=>{
    const[letterClass,setLetterClass]=useState('text-animate')
    const refForm=useRef()

    useEffect(()=>{
        setTimeout(()=>{
           setLetterClass('text-animate-hover')
       },3000)
   },[])
   const sendEmail=(e)=>{
       e.preventDefault()

       emailjs
       .sendForm('service_jxofady','template_etr2nni',refForm.current,'okhI0yGMeWT-6aa8p')
       .then(
        ()=>{
            alert('Message successfully sent!')
            window.location.reload(false)
        },
        ()=>{
            alert('Failed to send the message, please try again')
        }
       )
   }
    return(

        <>
        <div className="container contact-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','m','e']}
                    idx={15}
                    />
                </h1>
                <p>
                    I am interested in freelance opportunities- espeically amitious or
                     large projects. However, if you have other request or question,
                     don't hesitate to contact me using below form either.
                </p>
                
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                               <input type='text' name="name" placeholder='Name' required/>
                            </li>
                            <li className='half'>
                               <input type='email' name="email" placeholder='email' required/>
                            </li>
                            <li>
                                <input placeholder='subject' name="subject" type='text' required/>
                            </li>
                            <li>
                                <textarea placeholder='message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value="send"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
               Sidharth,
               <br/>
               India,
               <br/>
               APJ Hostel, IIT Indore<br/>
               Simrol<br/>
               <span>sidharthgarhwal11@gmail.com</span>
            </div>
            <div className='map-wrap'>
            <MapContainer center={[22.53213, 75.93460]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[22.53213, 75.93460]}>
              <Popup>Sidharth lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}
export default Contact