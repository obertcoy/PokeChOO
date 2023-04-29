function FooterBar(){

    return(
        <div className="footer-bar" style={{
            background:"rgba(0,0,0,0.2)",
            position:"absolute",
            bottom:"0",
            width:"100%",
            margin:"0",
            padding:"1vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}>
                <p style={{color:"whitesmoke", margin:"0", fontFamily:"PokemonPixel", fontSize:"max(1.1vw, 12px)"}}>©2023 Anthonio Obert Lais | All Rights Reserved</p>
        </div>
    )

}

export default FooterBar;