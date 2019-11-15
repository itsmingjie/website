

export default function SponsorCard (props) {
    return(
        <a href={props.href}>
            <img src={props.src}/>
            <style jsx>{`
            img {
                height:10vh;
                margin:10px;
            }
            `}</style>
        </a>
    )
}