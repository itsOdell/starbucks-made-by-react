/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
function Navbar() {
    return (
        <>
            <nav>
                <div className="container">
                    <div className="logo-container">
                        <h1 className="logo">Starbucks</h1>
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Menus</a></li>
                        <li><a href="#">Upcoming</a></li>
                        <li><a href="#">More</a></li>
                    </ul>
                </div>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(11, 66, 26)" fill-opacity="1" d="M0,320L40,277.3C80,235,160,149,240,144C320,139,400,213,480,229.3C560,245,640,203,720,208C800,213,880,267,960,256C1040,245,1120,171,1200,165.3C1280,160,1360,224,1400,256L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> */}
            </nav>
        </>
    )
}

export default Navbar;