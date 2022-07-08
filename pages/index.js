import Head from 'next/head';
import Homepage from "../components/Homepage";
import NavBar from "../components/NavBar";
import Metaverses from '../components/Metaverses';
import CryptoExchanges from '../components/CryptoExchanges';
import CryptoStacking from '../components/CryptoStacking';
import CryptoInvestements from '../components/CryptoInvestements';
import CryptoServices from '../components/CryptoServices';
import PlayToEarnGames from '../components/PlayToEarnGames';
import Contact from '../components/Contact';
import React from 'react';

if (typeof document === 'undefined') {
  React.useLayoutEffect = React.useEffect;
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Metaverse Bangkok</title>
        <meta name="description" content="Metaverse Bangkok" />
        <link rel="shortcut icon" href="#"/>
      </Head>
      <main style={{backgroundColor: '#130d32'}}>
        <NavBar></NavBar>
        <Homepage></Homepage>
        <Metaverses></Metaverses>
        <CryptoExchanges></CryptoExchanges>
        <CryptoStacking></CryptoStacking>
        <CryptoInvestements></CryptoInvestements>
        <CryptoServices></CryptoServices>
        <PlayToEarnGames></PlayToEarnGames>
        <Contact></Contact>
      </main>
    </div>
  );
}
