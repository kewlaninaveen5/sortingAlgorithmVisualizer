import React from "react";
import './PortfolioNetwork.css'

const Network = () => {

    const redirects = {
        "E-COMMERCE WEBSITE": "https://allinoneplacefrontend.netlify.app/",
        "PY TO JS CONVERTER": "https://py2jstranspiler.netlify.app/",
        "DIGITAL PORTFOLIO": "https://naveen-kewlani.web.app/",
        "HIMACHAL HOMESTAYS": "https://himachal-homestays.web.app/",
        "SORTING ALGORITHM VISUALISER": "https://sortingalgvisualizer.netlify.app",
        // "PROFILEWALLA": "https://profilewalla.com/",
    }

    const list = Object.entries(redirects).map((keyValueArray, key) => {
        const baseURL = window.location.origin
        return <div key={key} className={` ${baseURL === keyValueArray[1] ? "not-allowed" : "redirect"}`}>
            <a className={` ${baseURL === keyValueArray[1] ? "not-allowed" : "redirect"}`} href={keyValueArray[1]} target="_blank">Visit {keyValueArray[0]}</a></div>
    })


    return (
        <React.Fragment>

            <div>
                <div className={"network-container"} >

                    <div className='flex'>
                        <div className="left-align">
                            
                            <div className='skills'>
                                <b>ABOUT ME:</b><br/><br/>
                                <b>Naveen Kewlani</b><br />
                                2+ YOE of MERN, JS, Python, AI</div>
                            <img src={"/professiona photo.jpeg"} alt="My Profile" className="profile-image" />
                            <hr />
                            MY PROJECTS:
                            {list}
                        </div>
                        <div className="">
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
            <div className={"network-container"} >
                ABOUT ME:
                <div>

                </div>
                <img src={"/professiona photo.jpeg"} alt="My Profile" className="profile-image" />
                <hr/>
                
                <div>
                    {list}
                </div>
            </div>
        </div> */}
        </React.Fragment>
    )
}

export default Network;