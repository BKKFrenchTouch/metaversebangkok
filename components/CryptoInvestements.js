import { Controller, Scene } from 'react-scrollmagic';
import CryptoInvestementsStyleClass from "../componentsStyle/CryptoInvestementsStyle";

const CryptoInvestementsStyle = new CryptoInvestementsStyleClass();

let CryptoInvestements = () => {

    let handleMouseOver = (e) => {
        e.target.style.fontSize = '1.4vw';
        e.target.style.color = '#8ed0e6'
    }

    let handlerMouseLeave = (e) => {
        e.target.style.fontSize = '1.2vw';
        e.target.style.color = '#c64792';
    }

    return (
        <section style={CryptoInvestementsStyle.SectionStyle} id='5'>
            <Controller>
                <div style={CryptoInvestementsStyle.Details}>
                    <div style={{...CryptoInvestementsStyle.DetailsDiv, ...CryptoInvestementsStyle.IDO}}>
                        <h2 style={CryptoInvestementsStyle.DetailsTitle}>IDO</h2>
                        <p style={CryptoInvestementsStyle.DetailsContent}>
                        An initial DEX offering, or IDO, is a new and exciting type of decentralized and permissionless crowdfunding platform, which is opening up a new way of fundraising in the crypto space. If a project is launching an IDO, it means the project is launching a coin or token via a decentralized liquidity exchange.<br/><br/>
                        <a style={{color:'#c64792'}} onMouseOver={handleMouseOver} onMouseLeave={handlerMouseLeave} href='#8'>Get updated</a> about the next IDO gems and make X100 to X1000 on your crypto investments!
                        </p>
                    </div>
                    <div style={{...CryptoInvestementsStyle.DetailsDiv, ...CryptoInvestementsStyle.Launchpads}}>
                        <h2 style={CryptoInvestementsStyle.DetailsTitle}>Launchpads</h2>
                        <p style={CryptoInvestementsStyle.DetailsContent}>
                        Crypto launchpads, often referred to as IDO platforms, are platforms for launching new coins, crypto projects, and raising liquidity...<br/> An IDO is a platform for crowdfunding for any new project launched on a decentralized exchange platform using coins or tokens.<br/>Launchpad are the only way to buy future gems coins before they even get listed on the market and on CEX.<br/><br/>
                        Find out the best Launchpad based on your budget - <a style={{color:'#c64792'}} onMouseOver={handleMouseOver} onMouseLeave={handlerMouseLeave} href='#8'>Contact us</a>
                        </p>
                    </div>
                    <div style={{...CryptoInvestementsStyle.DetailsDiv, ...CryptoInvestementsStyle.MetaverseLands}}>
                        <h2 style={CryptoInvestementsStyle.DetailsTitle}>Metaverse Lands</h2>
                        <p style={CryptoInvestementsStyle.DetailsContent}>NFT metaverse land is a plot of virtual real estate represented by a non-fungible token. Depending on the platform, the owner can use their land for socializing, advertising, work, gaming, and other use cases.<br/>
                        Lands price of a 1x1 plot in the metaverse skyrocketed in the latter half of 2021 due to Facebook&apos;s rebrand to Meta, artificial scarcity, and institutional investors entering the market. NFT lands offer the best return on investment but how to get them? How to choose them?<br/><br/>
                        Find out the best NFT metaverse Lands for investment - <a style={{color:'#c64792'}} onMouseOver={handleMouseOver} onMouseLeave={handlerMouseLeave} href='#8'>Contact us</a>
                        </p>
                    </div>
                    <div style={{...CryptoInvestementsStyle.DetailsDiv, ...CryptoInvestementsStyle.MetaverseNFT}}>
                        <h2 style={CryptoInvestementsStyle.DetailsTitle}>Metaverse NFTs</h2>
                        <p style={CryptoInvestementsStyle.DetailsContent}>
                        NFTs, or non-fungible tokens, are meant to be one-of-a-kind digital goods.<br/> The metaverse allows people to showcase digital forms of art and property, and NFTs will allow them to put a price on that content with proof of ownership. While NFTs use the same blockchain technology that cryptocurrencies use, they&apos;re not a type of currency themselves. Each NFT is attached to a specific item.<br/><br/>
                        Find out more about the Metaverse NFTs - <a style={{color:'#c64792'}} onMouseOver={handleMouseOver} onMouseLeave={handlerMouseLeave} href='#8'>Contact us</a>
                        </p>
                    </div>
                    <div style={{...CryptoInvestementsStyle.DetailsDiv, ...CryptoInvestementsStyle.NewGems}}>
                        <h2 style={CryptoInvestementsStyle.DetailsTitle}>New Gems</h2>
                        <p style={CryptoInvestementsStyle.DetailsContent}>
                        Finding new gems is the most risky way but also the most likely way to make X100 on some new coins.<br/> Usually new coins are listed on Launchpads, and this is the best way to buy the new coins before they get listed. If the Launchpad option is out of your budget, you can consider searching the coin on Gate.io before it reaches its launch peak once listed on CEX like Binance of FTX.<br/><br/>
                        Find out how to get new gem coins before they get listed - <a style={{color:'#c64792'}} onMouseOver={handleMouseOver} onMouseLeave={handlerMouseLeave} href='#8'>Contact us</a>
                        </p>
                    </div>
                </div>
                <Scene duration={'400%'} triggerHook={0} pin>
                    <div style={CryptoInvestementsStyle.Title}>
                        <h2>Crypto Investements</h2>
                    </div>
                </Scene>
            </Controller>
        </section>
    )
}
export default CryptoInvestements;