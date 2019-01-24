import React from 'react'
import styled  from 'styled-components'
import Header from '../components/header';
import '../layouts/index.css';


const Contact = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    justify-items: center;
    grid-gap: 40px;
    position: relative;
    background: #244E5F;
    width: 100%;
    height: 100vh;
    padding: 10px 0;
    margin: 0 auto; 

    h1 {
        color: #FA5483;
        font-size: 24px;
        font-height: 600;
    }  

    p {
        color: #ffffff;
        font-size: 18px;
        line-height: 1.3;
    }
`
const blank = styled.div``
const info = styled.div``

const ContactPage = () => (
    <div>
        <Header />
        <Contact>
        <blank></blank>
        <info>
            <h1>Richard Simms</h1>
            <p>Design Lead</p><br />
            <a href="mailto:richard@rsimms.com"><p>richard@rsimms.com</p></a>
            <a href="tel:+61437116722"><p>+61 437 116 722</p></a>
            <a href="https://www.linkedin.com/in/richardsimms"><p>LinkedIn profile</p></a>
        </info>
    </Contact>
    </div>

)

export default ContactPage
