import React, { useState } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import CryptoStackingStyleClass from '../componentsStyle/CryptoStackingStyle';

const CryptoStackingStyle = new CryptoStackingStyleClass();

const CryptoStacking = () => {

    let handleMouseOver = (e) => {
        e.target.style.fontSize = '1.4vw';
        e.target.style.color = '#8ed0e6'
    }

    let handlerMouseLeave = (e) => {
        e.target.style.fontSize = '1.2vw';
        e.target.style.color = '#c64792';
    }

    const [state] = useState({
        cards: [
            {id:-1, content:'', style:{backgroundColor:'#130d32'}},
            {id:0, title:'Crypto Staking', content:'', style:{backgroundColor:'#130d32', color: '#f13d74', fontSize:'2vw'}},
            {id:1, content:'', style:{backgroundColor:'#130d32'}},
            {id:2, title:'Crypto Staking', content:'Crypto staking is a process used to verify cryptocurrency transactions. It involves committing holdings to support a blockchain network and confirm the transactions. It also allows participants to earn passive income on their holdings... Cryptocurrencies like Solana, Polkadot, Ether, and Cardano allow staking currently.Find out the best and most rewarding platforms to stake your crypto currencies!', style:{backgroundColor:'#130d32', color:'white'}},
            {id:3, content:'', style:{backgroundColor:'#130d32'}},
            {id:4, title:'Liquidity Pools', content:'A liquidity pool is a crowdsourced pool of cryptocurrencies or tokens locked in a smart contract that is used to facilitate trades between the assets on a decentralized exchange (DEX).A liquidity pool is a collection of funds locked in a smart contract. Liquidity pools are used to facilitate decentralized trading, lending, and many more functions.Find out the best, safest and most profitable platforms to earn with liquidity pools', style:{backgroundColor:'#130d32', color:'white'}},
            {id:5, content:'', style:{backgroundColor:'#130d32'}},
            {id:6, title:'Stable Coins', content:'Stablecoins are a type of cryptocurrency that derives its value from some underlying external asset, like the U.S. dollar or the price of gold. That makes them different from cryptocurrencies like Bitcoin or Ethereum, which is tied to being “mined” by computers.Find out how to stake your stablecoins to avoid volatility and maximize your interest rate!', style:{backgroundColor:'#130d32', color:'white'}},
            {id:7, content:'', style:{backgroundColor:'#130d32'}},
            {id:8, title:'Yield farming', content:"Yield farming, also known as yield or liquidity harvesting, involves lending cryptocurrency. In return, you get interest and sometimes fees, but they're less significant than the practice of supplementing interest with handouts of units of a new cryptocurrency. The real payoff comes if that coin appreciates rapidly.Find out the best options to yield farming and maximize your interests!", style:{backgroundColor:'#130d32', color: 'white'}},
            {id:9, content:'', style:{backgroundColor:'#130d32'}},
        ]
    });

    return (
        <section style={{...CryptoStackingStyle.SectionStyle}} id='4'>
            <Controller>
                <Scene triggerHook={'onLeave'} duration={6000} pin>
                    {progress => (
                        <div style={CryptoStackingStyle.pinContainer}>
                            <Timeline totalProgress={progress} paused>
                                <Tween from={{x: '0%'}} to={{x: '-110%'}}>
                                    <div style={CryptoStackingStyle.slideContainer}>
                                        {state.cards.map(card => (
                                            <div style={{...CryptoStackingStyle.panel, ...card.style}} key={card.id}>
                                                {(card.title) ? <h2 style={(card.id == 0) ? CryptoStackingStyle.cardTitleStyle : CryptoStackingStyle.cardSubTitleStyle}>{card.title}</h2> : ''}
                                                <p>{card.content}</p>
                                                {(card.id > 1 && card.content != '') ? <a style={{color:'#c64792'}} href='#8' onMouseOver={handleMouseOver} onMouseLeave={handlerMouseLeave}>Contact us</a> : ''}
                                                {/* {(card.imgSrc) ? <img src={card.imgSrc}></img> : ''} */}
                                            </div>
                                        ))}
                                    </div>
                                </Tween>
                            </Timeline>
                        </div>
                    )}
                </Scene>
            </Controller>
        </section>
    )
}

export default CryptoStacking;