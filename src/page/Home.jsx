import React from 'react'

// IMAGES
import Illustration from "../assets/illustration-intro.png";
import IllustrationProductive from "../assets/illustration-stay-productive.png";
import IconAccessAnywhere from "../assets/icon-access-anywhere.svg";
import IconAnyFile from "../assets/icon-any-file.svg";
import IconSecurity from "../assets/icon-security.svg";
import IconCollaboration from "../assets/icon-collaboration.svg";
import QuotesImage from "../assets/bg-quotes.png";
import Profile1 from "../assets/profile-1.jpg";
import Profile2 from "../assets/profile-2.jpg";
import Profile3 from "../assets/profile-3.jpg";

function Home() {
  return (
    <>
<section class="introduction">
            <img src={Illustration} alt="Two men storing files into a folder" />
            <h2 class="title">All your files in one secure location, accessible anywhere.</h2>
            <p class="description">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
            <a href="#Get-Started" target="_self" class="button">Get Started</a>
        </section>

        <section class="services">
            <article class="box">
                <img src={IconAccessAnywhere} alt="A Computer and Phone" />
                <h3 class="title">Access your files, anywhere</h3>
                <p class="description">The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
            </article>

            <article class="box">
                <img src={IconSecurity} alt="A Shield" />
                <h3 class="title">Security you can trust</h3>
                <p class="description">2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
            </article>

            <article class="box">
                <img src={IconCollaboration} alt="A Clock with Three People Close" />
                <h3 class="title">Real-time collaboration</h3>
                <p class="description">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
            </article>

            <article class="box">
                <img src={IconAnyFile} alt="Types of Files Close Each Other" />
                <h3 class="title">Store any type of file</h3>
                <p class="description">Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
            </article>
        </section>

        <section class="more-info">
            <img src={IllustrationProductive} alt="Three People Holding Big Cards" />
            <div class="box">
                <h2 class="title">Stay productive, wherever you are</h2>
                <p class="description">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                <p class="description">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                <a href="#See-How" class="link">See how Fylo works</a>
            </div>
        </section>

        <div class="cards">
            <img src={QuotesImage} alt="Quotes" class="quotes" />
            <div class="card">
                <p class="description">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div class="box">
                    <img src={Profile1} alt="Man" />
                    <div class="person-info">
                        <p class="name">Satish Patel</p>
                        <p class="job">Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <p class="description">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div class="box">
                    <img src={Profile2} alt="Man" />
                    <div class="person-info">
                        <p class="name">Bruce McKenzie</p>
                        <p class="job">Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <p class="description">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div class="box">
                    <img src={Profile3} alt="Man Photo" />
                    <div class="person-info">
                        <p class="name">Iva Boyd</p>
                        <p class="job">Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home;