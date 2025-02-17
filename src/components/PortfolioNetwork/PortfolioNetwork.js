import React from "react";
import './PortfolioNetwork.css'

const Network = () => {

    const redirects = {
        "DIGITAL PORTFOLIO" : "https://naveen-kewlani.web.app/",
        "HIMACHAL HOMESTAYS" : "https://himachal-homestays.web.app/",
        "SORTING ALGORITHM VISUALISER": "sortingalgvisualizer.netlify.app",
        "PROFILEWALLA": "https://profilewalla.com/",
    }

    const list = Object.entries(redirects).map((keyValueArray, key) => {
        const baseURL = window.location.origin
        return <div key = {key} className={` ${baseURL == keyValueArray[1] ? "not-allowed" : "redirect" }`}>
            <a className={` ${baseURL == keyValueArray[1] ? "not-allowed" : "redirect" }`} href={keyValueArray[1]} target="_blank">Visit {keyValueArray[0]}</a></div> 
    })


    return (
        <div>
            <div className={"network-container"} >
                View All My Projects 
                <div>
                    {list}
                </div>
            </div>
        </div>
    )
}

export default Network;