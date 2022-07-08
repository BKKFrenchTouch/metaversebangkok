import CryptoServicesStyleClass from "../componentsStyle/CryptoServicesStyle";
import React, { useState } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const CryptoServicesStyle = new CryptoServicesStyleClass();

let CryptoServices = () => {
    const [state] = useState({
        cards: [
            {id: -1, content:'', style:{backgroundColor:'#130d32'}},
            {id: 0, title:'Our Services', content:'', style:{backgroundColor:'#130d32', color: '#f13d74', fontSize: '2vw'}},
            {id: 1, content:'', style:{backgroundColor:'#130d32'}},
            {id: 2, title:'Crypto Consultant', content:'Our 10 years+ experience in Crypto allows us to professionally guide clients towards successful, compliant cryptocurrency transactions and practises across accounting and tax functions. We protect our clients from illegal and unethical crypto practises, while maximising their return on investment.Any questions bout our Crypto consultant services?', style:{backgroundColor:'#130d32', color:'white'}},
            {id: 3, content:'', style:{backgroundColor:'#130d32'}},
            {id: 4, title:'Buisness Payment Gateway', content:'Cryptocurrency payment gateways allow businesses to accept transactions of cryptocurrencies as payment from customers in exchange for goods or services. These systems accept payments from any country and put an emphasis on security due to the nature of blockchain-based cryptocurrencies.Find out the best Crypto payment gateway options for your business', style:{backgroundColor:'#130d32', color:'white'}},
            {id: 5, content:'', style:{backgroundColor:'#130d32'}},
            {id: 6, title:'Crypto Investement', content:'Cryptocurrency investing can take many forms, ranging from buying cryptocurrency directly to investing in crypto funds and companies. You can buy cryptocurrency using a crypto centralized exchange, a crypto decentralized exchange, joining an IDO launchpad or through certain broker-dealers.Find out the best up-to-date Crypto investments', style:{backgroundColor:'#130d32', color:'white'}},
            {id: 7, content:'', style:{backgroundColor:'#130d32'}},
            {id: 8, title:'Cash Out Solutions', content:'In order to cash out your Crypto funds, you first need to sell your cryptocurrency for cash. Then you can either transfer your funds to your bank or buy more crypto. Note that there is no limit on the amount of crypto you can sell for cash. However, the transfer of your cash to your bank account might be subject to taxes, based on the government in charge. Find out how to minimise your tax rate when cashing out your Cryptos', style:{backgroundColor:'#130d32', color:'white'}},
            {id: 9, content:'', style:{backgroundColor:'#130d32'}},
            {id: 10, title:'Play To Earn Recruitment', content:'Bangkok Metaverse is one of the leading P2E game guilds in South East Asia. Start to earn money today, playing your favourite Metaverse NFT games. With active Discord community, regular airdrops for scholars, and attractive commission rates, join our guild now and start earning everyday!', style:{backgroundColor:'#130d32', color:'white'}},
        ]
    });

    let handleMouseOver = (e) => {
        e.target.style.fontSize = '1.4vw';
        e.target.style.color = '#8ed0e6'
    }

    let handlerMouseLeave = (e) => {
        e.target.style.fontSize = '1.2vw';
        e.target.style.color = '#c64792';
    }

    return (
        <section style={CryptoServicesStyle.SectionStyle} id='6'>
            <Controller>
                <Scene triggerHook={'onLeave'} duration={6000} pin>
                    {progress => (
                        <div style={CryptoServicesStyle.pinContainer}>
                            <Timeline totalProgress={progress} paused>
                                <Tween from={{x: '0%'}} to={{x: '-110%'}}>
                                    <div style={CryptoServicesStyle.slideContainer}>
                                        {state.cards.map(card => (
                                            <div style={{...CryptoServicesStyle.panel, ...card.style}} key={card.id}>
                                                {(card.title) ? <h2 style={(card.id == 0) ? CryptoServicesStyle.cardTitleStyle : CryptoServicesStyle.cardSubTitleStyle}>{card.title}</h2> : ''}
                                                <p>{card.content}</p>
                                                {(card.id > 1 && card.content != '') ? <a style={{color:'#c64792'}} onMouseOver={handleMouseOver} onMouseLeave={handlerMouseLeave} href='#8'>Contact us</a> : ''}
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

export default CryptoServices;