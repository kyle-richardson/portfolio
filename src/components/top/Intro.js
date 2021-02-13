import React, {useState, useEffect} from "react"
import Typist from "react-typist"


const Intro = () => {

    const [showScroll, setShowScroll] = useState(true)
    window.onscroll = () => {
        var currentScrollPos = window.pageYOffset;
        if(currentScrollPos < 10) {
            setShowScroll (true)
        } else {
            setShowScroll(false)
        }
    }

    useEffect(()=> {
        if (document.getElementById("scroll-down")) {
            showScroll 
            ? document.getElementById("scroll-down").classList.remove("hide-scroll") 
            : document.getElementById("scroll-down").classList.add("hide-scroll") 
        }
    }, [showScroll])
    return (
        <div className="intro-container">
            <h1 style={{
                marginTop: "40vh"
            }}>Hey👋 I'm Kyle Richardson.</h1>
            <br/>
            <Typist avgTypingDelay={70} startDelay={1000}>
                <span style={{fontSize: "1.8rem", marginTop: '10vh'}}>Computer gamer</span>
                <Typist.Backspace count={14} delay={600}/>
                <span style={{fontSize: "1.8rem", marginTop: '10vh'}}>Web developer...</span>
                <Typist.Backspace count={3} delay={700}/>
                <span style={{fontSize: "1.8rem", marginTop: '10vh'}}>{" and gamer."}</span>
                <Typist.Delay ms={700} />
                <br/>
                <br/>
                <br/>
                <br/>
                <span style={{fontSize: "1.8rem", marginTop: '10vh'}}>Welcome!</span>
                <Typist.Delay ms={1000} />
                <br/>
                <br/>
                <br/>
                <br/>
                <span style={{fontSize: "1.8rem", marginTop: '10vh'}}>
                    <a className="typed-links" href="#about-me">About Me</a> 
                    {"  "}
                    <a className="typed-links" href="https://docs.google.com/document/d/e/2PACX-1vTRqxugKuzEeFEsaOtUGa4BrzfCsGuhEWNGOPoqQHdGWDVC2GhLmf2BYMMMyQnkkR1gTv12fz1-McEa/pub" target="_blank">Resume</a> 
                    {"  "}
                    <a className="typed-links" href="#projects">Projects</a>
                </span>
                <Typist.Delay ms={600} />
                <div id = "scroll-down" style={{position: "absolute", bottom: "2px", right: "50%", transition: 'all .5s'}}>
                    <span style={
                        {position: "relative", right: "-50%"}
                    }>
                        scroll down
                        </span>
                </div>
            </Typist>
            
        </div>
        
    )
}



export default Intro