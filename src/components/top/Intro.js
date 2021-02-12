import React, {useState, useEffect} from "react"
import Typist from "react-typist"


const Intro = () => {

    const [showScroll, setShowScroll] = useState(true)
    // const handleScroll = () => {
    //     const currentScrollPos = window.pageYOffset;
    //     console.log(currentScrollPos)
    //     if (currentScrollPos > 0) setShowScroll(false)
    //     else setShowScroll(true)
    // }
    // useEffect(()=> {
    //     window.addEventListener("wheel", handleScroll);
    //     return window.removeEventListener("wheel", handleScroll)
    // }, [])
    return (
        <div className="intro-container">
            <h1 style={{
                marginTop: "40%"
            }}>Hey👋 I'm Kyle Richardson.</h1>
            <br/>
            <Typist avgTypingDelay={90} startDelay={1000}>
                <span style={{fontSize: "1.8rem"}}>Computer gamer</span>
                <Typist.Backspace count={14} delay={600}/>
                <span style={{fontSize: "1.8rem"}}>Web developer...</span>
                <Typist.Backspace count={3} delay={700}/>
                <span style={{fontSize: "1.8rem"}}>{" and gamer."}</span>
                <Typist.Delay ms={700} />
                <br/>
                <br/>
                <br/>
                <br/>
                <span style={{fontSize: "1.8rem"}}>Welcome!</span>
                <Typist.Delay ms={1000} />
                <br/>
                <br/>
                <br/>
                <br/>
                <span style={{fontSize: "1.8rem"}}>
                    <a className="typed-links" href="#about-me">About Me</a> 
                    {"  "}
                    <a className="typed-links" href="https://docs.google.com/document/d/e/2PACX-1vTRqxugKuzEeFEsaOtUGa4BrzfCsGuhEWNGOPoqQHdGWDVC2GhLmf2BYMMMyQnkkR1gTv12fz1-McEa/pub" target="_blank">Resume</a> 
                    {"  "}
                    <a className="typed-links" href="#projects">Projects</a>
                </span>
                <Typist.Delay ms={600} />
                <div style={{position: "absolute", bottom: "2px", right: "50%"}}>
                    <span style={
                        {position: "relative", right: "-50%"}
                    // window.pageYOffset < 10 ? {opacity: 1} : {opacity: 0}
                    }>scroll down</span>
                </div>
            </Typist>
            
        </div>
        
    )
}



export default Intro