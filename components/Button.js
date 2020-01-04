export default function Button (props) {
    return(
        <div style={{display:"flex"}}>
            <a style={props.styles} className="button" href={props.href}>{props.val}</a>
            <style jsx>{`
            .button {
                width:135px;
                padding: 20px 40px 20px 40px;
                background-color:#8a56ff;
                margin:10px;
                color:white;
                font-weight:700;
                font-size:1.3em;
                border-radius:100px;
                text-transform:uppercase;
                transition: all .2s ease-in-out;
                will-change: transform;
                margin:auto;
            }
            .button :hover {
                transform: scale(1.1);
                -moz-transition: scale(1.4);
            }
            a:hover {
                text-decoration: none;
            }
            `}</style>
        </div>
    )
}