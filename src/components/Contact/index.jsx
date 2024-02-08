import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass , setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        },3000)
    },[])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('p.rossiter83@gmail.com', 'contact_form', refForm.current, 'w1ULsXxchzrjhuclR')
            .then (
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                ()=> {
                    alert(' Failed to send your message, pleease try again')
                }
            )
    }
    return ( 
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        stringArray={['C', 'o', 'n', 't', 'a', 'c', 't',' ', 'm', 'e']}
                        idx={15} />
                    </h1>
                    <p>
                    I am interested in freelance opportunities - especially on ambitious 
                    or large projects. However, if you have any other requests or
                    questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input 
                                        type="email" 
                                        name='email' 
                                        placeholder='Email' 
                                        required
                                    />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='Send' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Paul Rossiter,
                    <br />
                    London, SE10 0LW
                    <br />
                    United Kingdom,
                    <span>p.rossiter833@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[51.5, 0.0192269]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                        <Marker position={[51.4852, 0.0175]}>
                            <Popup>We are here</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
     );
}
 
export default Contact;