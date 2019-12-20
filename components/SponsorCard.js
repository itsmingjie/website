

export default function SponsorCard (props) {
    return(
        <a href={props.href}>
            <img src={props.src}/>
            <style jsx>{`
            img {
                height:10vh;
                max-width:20vw;
                margin:10px;
                display:block;
                margin-left: auto;
                margin-right: auto;
                border-radius:15px;
            }
            a {
                width:20vw;
                height:10vh;
                padding:10px;
            }
            `}</style>
        </a>
    )
}``