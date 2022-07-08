class CryptoServicesStyle {
    SectionStyle = {
        display: 'flex',
        positon: 'relative',
        width: '100%',
        flexDirection: 'column',
        backgroundColor:'#130d32', 
        marginTop:'95vh'
    }

    pinContainer = {
        width: '100%',
        height:'100vh',
        margin: 'auto',
        overflow: 'hidden',
        backgroundColor: '#130d32'
    }
    
    slideContainer = {
        padding: '0',
        display: 'flex',
        width: '380%',
        height: '100vh'
    }

    panel = {
        flex: 1,
        padding: '10px',
        height:'100vh',
        lineHeight: "1.6",
        alignItems: 'center',
        flexDirection: 'column',
        display:'flex',
        justifyContent: 'center',
        fontSize: '1.2vw',
        textAlign:'justify'
    }
    cardTitleStyle = {
        marginBottom: '0.5em',
        textAlign: 'center',
    }
    cardSubTitleStyle = {
        marginBottom:'4em',
        fontSize: '1.8vw',
        color: '#682ae9'
    }
}

export default CryptoServicesStyle;