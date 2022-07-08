class CarouselStyle {
    divSection = {
        display: 'flex',
        width: '100%',
        backgroundColor: '#130d32',
        overflow: 'hidden',
        position: 'relative',
        justifyContent:'center',
        alignItems:'center',
        height:'50vh',
        width:'32vw',
    }

    Container = {
        width: '100%',
        height:'100%',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        marginBottom: '3rem'
    }

    Slide = {
        display: 'flex',
        flexShrink: 0,
        width: '100%',
        height: '100%',
        padding: 0,
        margin: 0,
        justifyContent:'center',
        alignItems:'center'
    }

    Btn = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor:'transparent',
        color:'#682ae9',
        fontSize:'3rem',
        borderWidth: 0,
        cursor: 'pointer',
        zIndex: 10,
    }

    BtnLeft = {
        left:0
    }

    BtnRight = {
        right: 0
    }

    ImgTitle = {
        position: 'absolute',
        fontSize:'1.5vw',
        bottom: '0%',
        color: '#c64792'
    }
} 

export default CarouselStyle;