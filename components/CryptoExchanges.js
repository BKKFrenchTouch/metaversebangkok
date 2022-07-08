import { useState } from "react";
import CryptoExchangeStyleClass from "../componentsStyle/CryptoExchangeStyle";

const CryptoExchangeStyle = new CryptoExchangeStyleClass();

const CEXlogo = "icons/centralized.png";
const DEXlogo = "icons/decentralized.png";

const arrowCEXClose = "icons/arrowCexClose.png";
const arrowDEXClose = "icons/arrowDexClose.png";

const arrowCEXOpen = "icons/arrowCexOpen.png";
const arrowDEXOpen = "icons/arrowDexOpen.png";

let CryptoExchanges = () => {
    let [sidePanelCxOpen, setPanelCxOpen] = useState(false);
    let [sidePanelDxOpen, setPanelDxOpen] = useState(false);

    let SidePanelCxOpen = () => {
        if(sidePanelCxOpen){
            setPanelCxOpen(false);
        }else{
            setPanelCxOpen(true);
        }
    }

    let SidePanelDxOpen = () => {
        if(sidePanelDxOpen){
            setPanelDxOpen(false);
        }else{
            setPanelDxOpen(true);
        }
    }

    const handleMouseOver = (e) => {
        e.target.style.fontSize = '1.4vw'
    }

    const handlerMouseLeave = (e) => {
        e.target.style.fontSize = '1.2vw';
    }

    return (
        <section style={(sidePanelCxOpen || sidePanelDxOpen) ? CryptoExchangeStyle.SectionStyleOpen : CryptoExchangeStyle.SectionStyle} id="3">
            <div style={CryptoExchangeStyle.CryptoExchangeTitleDiv}>
                <h2 style={CryptoExchangeStyle.CryptoExchangeTitle}> Crypto Exchanges</h2>
                <p style={CryptoExchangeStyle.CryptoExchangeTitleContent}>Choose your side..</p>
            </div>
            <div style={CryptoExchangeStyle.columnStyle}>
                <div style={CryptoExchangeStyle.CEXStyle}>
                    <h2 style={CryptoExchangeStyle.SubTitleStyle}>Centralized Exchanges</h2>
                    <img src={CEXlogo} style={{width: '10vw'}}></img>
                    <div style={CryptoExchangeStyle.DivContent}>
                        <p><p style={{color:'#c64792', display:'inline'}}>Centralized exchanges</p> are platforms which facilitate the buying and selling of cryptocurrency. They function as trusted intermediaries in trades, and often act as custodians by storing and protecting your funds.</p>
                    </div>
                    <input type="image" src={(sidePanelCxOpen) ? arrowCEXOpen : arrowCEXClose} style={CryptoExchangeStyle.arrowStyle} onClick={SidePanelCxOpen}></input>
                </div>
            
                <div style={CryptoExchangeStyle.DEXStyle}>
                    <h2 style={CryptoExchangeStyle.SubTitleStyle}>Decentralized Exchanges</h2>
                    <img src={DEXlogo} style={{width: '10vw'}}></img>
                    <div style={CryptoExchangeStyle.DivContent}>
                        <p><p style={{color:'#8ed0e6', display:'inline'}}>Dentralized exchange</p> (or DEX) is a peer-to-peer marketplace where transactions occur directly between crypto traders, fostering financial transactions that aren&apos;t officiated by banks, brokers, payment processors, or any other kind of intermediary.</p>
                    </div>  
                    <input type="image" src={(sidePanelDxOpen) ? arrowDEXOpen : arrowDEXClose} style={CryptoExchangeStyle.arrowStyle} onClick={SidePanelDxOpen}></input>
                </div>
            </div>
            <div style={(sidePanelCxOpen || sidePanelDxOpen) ? CryptoExchangeStyle.sidePanelDivOpen : CryptoExchangeStyle.sidePanelDivClose} id='sidePanelDiv'>
                    <div style={(sidePanelCxOpen) ? CryptoExchangeStyle.sidepanelCEXOpen : CryptoExchangeStyle.sidepanelCEXClose} id="sidePanelCex">
                            <p style={(sidePanelCxOpen) ? CryptoExchangeStyle.sidepanelContentStyleOpen : CryptoExchangeStyle.sidepanelContentStyleClose} id='sidePanelContentCEX'>
                                <a style={{color:'#c64792'}} onMouseOver={handleMouseOver} onMouseLeave={handlerMouseLeave} href="https://accounts.binance.com/en/register?ref=A1VUJ1ZK" target='_blank' rel="noreferrer">Binance:</a> Where your Crypto journey starts.<br/> 
                                Welcome to the World&apos;s Largest Crypto Exchange for a Reason; with over 300 Coins to Choose. Trusted by millions of users worldwide. Start trading Cryptos now!<br/><br/>
                                <a style={{color:'#c64792'}} onMouseOver={handleMouseOver} onMouseLeave={handlerMouseLeave} href="https://www.bybit.com/en-US/invite?ref=MQRRGE" target='_blank' rel="noreferrer">Bybit:</a> Find the latest released token gems!<br/>
                                One of the fastest growing cryptocurrency exchanges, with more than 2 million registered users. You can buy and sell crypto instantly<br/><br/>
                                <a style={{color:'#c64792'}} onMouseOver={handleMouseOver} onMouseLeave={handlerMouseLeave} href="https://celsiusnetwork.app.link/125204e82f" target='_blank' rel="noreferrer">Celsius:</a> Best exchange to stake your cryptos with the highest yield rates!<br/>
                                A community of over 1 million users that earn up to 17% yield on their crypto. Get paid new coins every week and borrow cash at 1%.<br/><br/>
                                <a style={{color:'#c64792'}} onMouseOver={handleMouseOver} onMouseLeave={handlerMouseLeave} href="http://coinbase.com/join/conraz_2?src=android-link" target='_blank' rel="noreferrer">Coinbase:</a> Safest and most secure crypto exchange from the USA.<br/>
                                Coinbase is a secure online platform for buying, selling, transferring, and storing cryptocurrency. Coinbase is the world&apos;s largest Bitcoin exchange and broker and the simplest, safest way to buy, store, trade and sell your cryptocurrency. Recommended for beginners and holders.<br/><br/>
                                <a style={{color:'#c64792'}} onMouseOver={handleMouseOver} onMouseLeave={handlerMouseLeave} href="https://crypto.com/app/hazruv4czn" target='_blank' rel="noreferrer">Crypto dot com:</a><br/>
                                This exchange supports trading, investing, staking, wallets, NFTs, and more than 150 different currencies, at reasonable fees, and discounts for those who hold a significant stake in Crypto.com Coin (CRO).<br/><br/>
                                <a style={{color:'#c64792'}} onMouseOver={handleMouseOver} onMouseLeave={handlerMouseLeave} href="https://www.gate.io/signup/8109862" target='_blank' rel="noreferrer">Gate.io:</a> Find the best token gems before they get listed on Binance!<br/>
                                Gate.io is one of the global top 10 cryptocurrency exchanges with authentic trading volume. They provide safe and transparent transactions, and this is where you will find the best metaverse tokens before just after their IDOs.
                            </p>
                    </div>
                    <div style={(sidePanelDxOpen) ? CryptoExchangeStyle.sidepanelDEXOpen : CryptoExchangeStyle.sidepanelDEXClose} id="sidePanelDex">
                            <p style={(sidePanelDxOpen) ? CryptoExchangeStyle.sidepanelContentStyleOpen : CryptoExchangeStyle.sidepanelContentStyleClose} id='sidePanelContentDEX'>
                                <a style={{color: '#8ed0e6'}} onMouseOver={handleMouseOver} onMouseLeave={handlerMouseLeave} href='https://pancakeswap.finance/' target='_blank' rel="noreferrer">Pancake Swap:</a> The leading DEX on Binance Smart Chain (BSC) with the best farms in DeFi and fastest transactions.<br/>
                                PancakeSwap uses an automated market maker (AMM) model where users trade against a liquidity pool. Such pools are filled with users&apos; funds. They deposit them into the pool, receiving liquidity provider (or LP) tokens in return.PancakeSwap has the most users of any decentralized platform, ever. And those users are now entrusting the platform with over $12 billion in funds.<br/><br/>
                                <a style={{color: '#8ed0e6'}} onMouseOver={handleMouseOver} onMouseLeave={handlerMouseLeave} href='https://uniswap.org/' target='_blank' rel="noreferrer">UniSwap:</a> The largest and most popular decentralized exchanges on the Ethereum blockchain<br></br>
                                Uniswap is an automated liquidity protocol based on the Ethereum blockchain that facilitates trades without the need for a centralized counterpartyit operates as a decentralized exchange and liquidity pool and is built on Ethereum, meaning it has the same security as the Ethereum blockchain.<br></br><br></br>
                            </p>
                    </div>
            </div>
        </section>
    )
}

export default CryptoExchanges;