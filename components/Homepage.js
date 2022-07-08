import { Parallax } from "react-parallax";
import SocialIcons from "./SocialIcons";
import TypeWriterEffect from "typewriter-effect";
import { useEffect, useState} from "react";
import HomepageStyleClass from "../componentsStyle/HomepageStyle";

const HomepageStyle = new HomepageStyleClass();

const Homepage = () => {
    const HomepageImg = "img/homepage.jpg"
    const [scrollDown, setScrollDownVar] = useState(false);

    const changeScrollDownVar = () => {
        if(window.scrollY >= 50){
            setScrollDownVar(true);
        }else{
            setScrollDownVar(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeScrollDownVar);
    })

    return (
        <div style={HomepageStyle.HomepageDiv}>
            <Parallax bgImage={HomepageImg} strength={80} bgStyle={{border: "none"}} key={'homepage'}>
                <div style={{ height: 1000}}>
                   <div style={HomepageStyle.homepageStyle} id='HomePage'>
                        <div style={scrollDown ? HomepageStyle.inlineStyleScrollHomePage : HomepageStyle.inlineStyleHomePage}>
                            <TypeWriterEffect
                                onInit={(typewriter) => {
                                    typewriter
                                    .typeString("\\(^_^)/")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString("DIVE INTO THE METAVERSE")
                                    .start();
                                }}
                                textStyle = {{fontSize:'20vw'}}
                            />
                        </div>
                        <SocialIcons>
                        </SocialIcons>
                   </div>
                </div>
            </Parallax>
        </div>
    )
}

export default Homepage;