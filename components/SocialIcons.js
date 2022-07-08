
const SocialIconsSrc = [
    "icons/twitter.png",
    "icons/facebook.png"
]

const SocialIconsLink = [
    "https://twitter.com/BConrazier",
    "https://facebook.com/profile.php?id=639435545"
]


let SocialIcons = () => {
    return(
        <div style={{height: 30, marginTop: '30vw'}}>
            {
                SocialIconsSrc.map((elem, index) => {
                    let alt = elem.split('/')[1].replace('.png', '');
                    let ref = SocialIconsLink[index];
                    return (
                        <span style={{margin: '5px'}} key={alt}>
                            <a href={ref} target='_blank' rel="noreferrer" key={alt}>
                                <img src={elem} width={50} height={50} key={alt}/>
                            </a>
                        </span>
                    )
                })
            }
        </div>
    );
}

export default SocialIcons;