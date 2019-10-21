

export default function SponsorCard (props) {
    return(
        <div>
            <img src={props.src}/>
            <style jsx>{`
            img {
                height:10vh;
                margin:10px;
            }
            `}</style>
        </div>
    )
}