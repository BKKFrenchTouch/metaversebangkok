class CryptoExchangeStyle {
    SectionStyle = {
        display: 'flex',
        positon: 'relative',
        height: '300vh',
        width: '100%',
        flexDirection: 'column'
    }
    
    SectionStyleOpen = {
        display: 'flex',
        positon: 'relative',
        height: '100vh',
        width: '100%',
        flexDirection: 'column',
        marginBottom: '250vh'
    }

    CryptoExchangeTitleDiv = {
        backgroundColor: '#130d32',
        lineHeight: "1.6",
        display: 'flex',
        height: '25vh',
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        color: '#f13d74',
    }

    CryptoExchangeTitle = {
        fontSize:'3vw',
        lineHeight:'1.6',
        marginTop:'8vh',
        marginBottom:'auto'
    }

    CryptoExchangeTitleContent = {
        fontSize:'1.4em',
        lineHeight:'1.6',
        marginBottom: '8vh',
        marginTop:'auto',
        color:'white'
    }

    SubTitleStyle = {
        fontSize:'1.8vw',
        marginBottom:'1.4em',
        marginTop:'auto',
        // color: '#682ae9'
    }
    
    columnStyle = {
        display: 'flex',
        positon:'absolute',
        flexDirection: 'row',
    }
    
    CEXStyle = {
        display: 'flex',
        lineHeight: "1.6",
        width:'50%',
        height: '90vh',
        backgroundColor:'#130d32',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        color: '#8ed0e6'
    }

    DivContent = {
        width:'30vw',
        textAlign:'justify',
        fontSize: '1.2vw',
        height:'30vh'
    }
    
    DEXStyle = {
        display: 'flex',
        lineHeight: "1.6",
        width:'50%',
        height: '90vh',
        backgroundColor:'#130d32',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        color: '#c64792'
    }
    
    arrowStyle = {
        width:'50px',
        marginTop:'2vw'
    }
    
    sidepanelCEXOpen = {
        display: 'flex',
        lineHeight: "1.6",
        zIndex: 1,
        width: '50%',
        height: '75vh',
        backgroundColor: '#130d32',
        color: '#8ed0e6',
        marginRight: 'auto',
        marginLeft: 0,
        marginTop:'70vh',
        marginBottom:'auto',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        transition: '0.5s',
    }

    sidepanelCEXClose = {
        display: 'flex',
        width: '0%',
    }
    
    sidepanelDEXOpen = {
        display: 'flex',
        lineHeight: "1.6",
        width: '50%',
        zIndex: 1,
        height: '75vh',
        backgroundColor: '#130d32',
        color: '#c64792',
        marginRight: 0,
        marginLeft: 'auto',
        marginTop:'22vh',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        transition: '0.5s'
    }

    sidepanelDEXClose = {
        display: 'flex',
        width: '0%',
    }
    
    sidePanelDivClose = {
        width: '0%',
        display:'flex',
        flexDirection: 'row',
        positon: 'absolute',
        height: '0%'
    }
    
    sidePanelDivOpen = {
        positon: 'relative',
        width: '100%',
        height: '150vh',
        display:'flex',
        flexDirection: 'row',
        backgroundColor: '#130d32',
    }

    sidepanelContentStyleClose = {
        fontSize:'0px'
    }

    sidepanelContentStyleOpen = {
        lineHeight: "1.6",
        width: '30vw',
        transition: '0.3s',
        fontSize: '1.2vw',
        marginBottom:'auto',
        textAlign:'justify'
    }
}

export default CryptoExchangeStyle;