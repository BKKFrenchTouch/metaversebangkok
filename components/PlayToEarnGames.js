import PlayToEarnGamesStyleClass from "../componentsStyle/PlayToEarnGamesStyle";
import Carousel from "./Carousel";

const PlayToEarnGamesStyle = new PlayToEarnGamesStyleClass();

let PlayToEarnGames = () => {

    let handleMouseOver = (e) => {
        e.target.style.fontSize = '1.7vw';
        e.target.style.color = '#8ed0e6'
    }

    let handlerMouseLeave = (e) => {
        e.target.style.fontSize = '1.5vw';
        e.target.style.color = '#c64792';
    }

    return (
        <section style={PlayToEarnGamesStyle.Section} id="7">
            <div style={PlayToEarnGamesStyle.TitleDiv}>
                <h2 style={PlayToEarnGamesStyle.Title}>NFT Gaming</h2>
                <p style={PlayToEarnGamesStyle.TitleContent}>Play To Earn</p>
            </div>
            <div style={PlayToEarnGamesStyle.DivCarousel}>
                <Carousel>
                    <img src="icons/playToEarn/Star_Atlas_2.png" alt="Star Atlas" href='https://staratlas.com/'></img>
                    <img src="icons/playToEarn/splinterlands.png" alt="SplinterLands" href='https://splinterlands.com/'></img>
                    <img src="icons/playToEarn/Mirandus.png" alt="Mirandus" href='https://mirandus.game/'></img>
                    <img src="icons/playToEarn/Illuvium.png" alt="Illuvium" href='https://www.illuvium.io/'></img>
                    <img src="icons/playToEarn/decentraland.png" alt="Decentraland" href='https://decentraland.org/'></img>
                    <img src="icons/playToEarn/bigtime.png" alt="BigTime" href='https://bigtime.gg/'></img>
                    <img src="icons/playToEarn/Axie.png" alt="Axies Infinity" href='https://axieinfinity.com/'></img>
                </Carousel>
            </div>
            <div style={PlayToEarnGamesStyle.WeRecruitDiv}>
                <h2 style={PlayToEarnGamesStyle.WeRecruitDivContent}> <a href="#8" style={{color:'#c64792'}} onMouseOver={handleMouseOver} onMouseLeave={handlerMouseLeave}>We Recruit</a> - Join Our Guild !</h2>
            </div>  
        </section>
    )
}

export default PlayToEarnGames;