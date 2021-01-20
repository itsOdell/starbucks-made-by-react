import React from 'react'
import Button from "./Button"
function Hero() {  
    return (
        <>
            <main className="hero-background">
                <div className="hero-container">
                    <div className="message"><h1>This is not just Coffee<br />It's <span>Starbucks</span></h1>
                    <div className="icons"><i className="fab fa-facebook-f" /><i className="fab fa-instagram" /><i className="fab fa-twitter" /></div>
                    <Button text="Order Now"/>
                    </div>
                    <div className="hero-image"><img src="https://freepngimg.com/download/starbucks/77325-frappuccino-drink-chocolate-starbucks-matcha-white.png" alt="coffe" id="coffee"/></div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" id="wavy"><path fill="rgb(11,66,26)" fill-opacity="1" d="M0,256L40,250.7C80,245,160,235,240,240C320,245,400,267,480,272C560,277,640,267,720,229.3C800,192,880,128,960,122.7C1040,117,1120,171,1200,165.3C1280,160,1360,96,1400,64L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" id="wavy2"><path fill="rgba(11, 66, 26, 0.75)" fill-opacity="1" d="M0,256L80,245.3C160,235,320,213,480,176C640,139,800,85,960,106.7C1120,128,1280,224,1360,272L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </main>
        </>
    )
}
export default Hero;