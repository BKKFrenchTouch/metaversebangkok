import { Controller, Scene } from 'react-scrollmagic';
import MetaversesStyleClass from '../componentsStyle/MetaversesStyle';

let MetaversesStyle = new MetaversesStyleClass();

let Metaverses = () => {

    let handleMouseOver = (e) => {
        e.target.style.fontSize = '1.4vw';
        e.target.style.color = '#8ed0e6'
    }

    let handlerMouseLeave = (e) => {
        e.target.style.fontSize = '1.2vw';
        e.target.style.color = '#c64792';
    }

    return (
        <section style={MetaversesStyle.SectionStyle} id='2'>
            <Controller>
                <Scene duration={'300%'} triggerHook={0} pin>
                    <div style={MetaversesStyle.metaverseTitle}>
                        <h2>Metaverses</h2>
                    </div>            
                </Scene>
                <div style={MetaversesStyle.metaverseDetails}>
                    <div style={{...MetaversesStyle.metaverseDetailsDiv, ...MetaversesStyle.metarverseToken}}>
                        <h2 style={MetaversesStyle.detailsTitle}>Metaverse Token</h2>
                        <p style={MetaversesStyle.metaverseDetailsContent}>
                            SAND (Sanbox) and MANA (Decentraland) have been the most profitable metaverse coins in 2021. But new metaverse coins are catching up, such as ILV (Illuvium), POLIS (Star Atlas DAO) and many more metaverse games that are being released in 2022. Which metaverse coins are currently the best investments? Which coins will be the best investment in the long term?<br/><br/>
                            Find out now - <a href='#8' onMouseOver={handleMouseOver} onMouseLeave={handlerMouseLeave} style={{color:'#c64792'}}>Contact-Us</a>
                        </p>
                    </div>
                    <div style={{...MetaversesStyle.metaverseDetailsDiv, ...MetaversesStyle.metarverseLands}}>
                        <h2 style={MetaversesStyle.detailsTitle}>Metaverse Lands</h2>
                        <p style={MetaversesStyle.metaverseDetailsContent}>
                            Metaverse lands are with no doubt part of the best investments offered in Crypto since the release of NFTs. 
                            However one must choose the right metaverse and the right lands in it for a successful investment. Metaverses in the triple A games (Illuvium, Big time, Mirandus, Star Atlas, Walking dead, etc) are definitely the best to invest in the long term, but they also offer additional way to be profitable by using it in game and gathering resources, renting out parts of the lands, etc.<br/><br/>
                            Find out the best Metaverse lands and how to maximise your profits with them - <a href='#8' onMouseOver={handleMouseOver} onMouseLeave={handlerMouseLeave} style={{color:'#c64792'}}>Contact-Us</a>
                        </p>
                    </div>
                    <div style={{...MetaversesStyle.metaverseDetailsDiv, ...MetaversesStyle.metarverseP2E}}>
                        <h2 style={MetaversesStyle.detailsTitle}>Metaverse P2E</h2>
                        <p style={MetaversesStyle.metaverseDetailsContent}>
                            Most video games so far had a centralised economic model where developers and publishers had the rights to all in-game economy items and the right to distribute the in-game assets as they saw fit.<br/> 
                            The play-to-earn game model in the metaverse is an emerging market where players can monetise the amount of time they spend playing video games and they can own assets directly in-game. The model is still in its infancy, and the most profitable P2E metaverses so far are Axie Infinity, Snad Box, Decentraland.<br/><br/>
                            Stay tuned to find out the next trendy AAA P2E metaverses - <a href='#8' onMouseOver={handleMouseOver} onMouseLeave={handlerMouseLeave} style={{color:'#c64792'}}>Contact-Us</a>
                        </p>
                    </div>
                    <div style={{...MetaversesStyle.metaverseDetailsDiv, ...MetaversesStyle.metarverseUpcoming}}>
                        <h2 style={MetaversesStyle.detailsTitle}>Best Upcoming Metaverses</h2>
                        <p style={MetaversesStyle.metaverseDetailsContent}>2021 had been the year we talked about Metaverses. 2022 is clearly the year we can finally enter and interact in the different metaverses. But which Metaverses are the best investments? Which are the most fun to join? Which Metaverses got the largest community? Which Metaverses are already accesible on VR?<br/><br/>
                             <a href='#8' onMouseOver={handleMouseOver} onMouseLeave={handlerMouseLeave} style={{color:'#c64792'}}>Contact-Us</a> & find out the best metaverse based on your use and budget
                        </p>
                    </div>
                </div>
            </Controller>
        </section>
    );
}
export default Metaverses;