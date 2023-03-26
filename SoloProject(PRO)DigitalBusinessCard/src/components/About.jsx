import React from "react";


function About () {
    return (
    <main>
        <div className="linksContainer">
            <a className="btnLink emailLink"><i className="fa-regular fa-envelope"></i> Email</a>
            <a href="https://www.linkedin.com/in/lucas-mello-b831bb153/" className="btnLink linkedinLink"><i className="fa-brands fa-linkedin"></i> Linkedin</a>
        </div>
        <h4 className="title">About</h4>
        <p> I am a developer, with a Bachelor's in Computer Science and a Master's in Mathematics and Computing with a specialization in Machine Learning, currently interested in FrontEnd and Machine Learning. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h4 className="title">Interests</h4>
        <p>Trying to learn how to cook well, stick to a gym routine, and when I have time to play a little video game</p>
    </main>
    )
}

export default About