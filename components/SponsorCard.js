

export default function SponsorCard (props) {
    return(
        <a href={props.href}>
            <img src={props.src}/>
            <style jsx>{`
            img {
                height:60px;
                margin:10px;
                display:block;
                margin-left: auto;
                margin-right: auto;
                border-radius:15px;
            }
            a {

                padding:20px;
            }
            `}</style>
        </a>
    )
}``