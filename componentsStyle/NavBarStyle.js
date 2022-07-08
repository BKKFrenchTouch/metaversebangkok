class NavBarStyle {
    navHeaderScrollStyle = {
        lineHeight: "1.6",
        backgroundColor: "#0f072c",
        position: "fixed",
        zIndex: "9999",
        top: "0px",
        height: "8vh",
        width: "100%"
    }

    navHeaderStyle = {
        lineHeight: "1.6",
        backgroundColor: "transparent",
        position: "fixed",
        zIndex: "9999",
        top: "0px",
        height: "8vh",
        width: "100%"
    }

    navStyle = {
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    }
    
    linkNavStyle = {
        display: 'flex',
        lineHeight: "1.6",
        marginTop:'0.8em',
        marginBottom:'auto',
        fontSize: "1.1vw",
        fontWeight:'bold',
        color: "#f13d74",
    }
}
export default NavBarStyle;