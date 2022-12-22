import React from 'react';

    // IMAGES
    import Logo from "../assets/logo.svg";
    import IconLocation from "../assets/icon-location.svg";
    import IconPhone from "../assets/icon-phone.svg";
    import IconEmail from "../assets/icon-email.svg";

    // CSS
    import "./Footer.css";

function Footer() {
  return (
    <footer className='information'>
        <img src={Logo} alt="Fylo Logo" />
        <div className="information-container">
            <div className="box">
                <img src={IconLocation} alt="Location Icon" />
                <p className='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum aliquid illum ipsam amet. Non, similique hic ducimus doloribus quibusdam asperiores cumque cupiditate blanditiis!</p>
            </div>

            <div className="box">
                <div className="phone">
                    <img src={IconPhone} alt="Phone Icon" />
                    <p className='description'>+0-000-000-0000</p>
                </div>

                <div className="email">
                    <img src={IconEmail} alt="Email Icon" />
                    <p className='description'>example@fylo.com</p>
                </div>
            </div>

            <div className="box">
                <a href="#About-Us">About Us</a>
                <a href="#Jobs">Jobs</a>
                <a href="#Press">Press</a>
                <a href="#Blog">Blog</a>
            </div>

            <div className="box">
                <a href="#Contact Us">Contact Us</a>
                <a href="#Terms">Terms</a>
                <a href="#Privacy">Privacy</a>
            </div>

            <div className="box">
                <a href="#Facebook" className='fa fa-facebook'></a>
                <a href="#Twitter" className='fa fa-twitter'></a>
                <a href="#Instagram" className='fa fa-instagram'></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer