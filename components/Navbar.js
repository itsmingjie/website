export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navContainer">
                <div className="sidebar">
                    <div className="item" stye={{ display: "flex"}}>
                        <a href="https://hacknewyear.com/" style={{ display: "flex" }}><img src="../static/htny-logo.png" style={{ width: "100%", margin: "auto",maxWidth:"50px" }} /></a>
                    </div>
                    <a href="#faq" className="item">
                        <a>FAQ</a>
                    </a>
                    <a href="#sponsors" className="item">
                        <a>Sponsors</a>
                    </a>
                    <a href="#team" className="item">
                        <a>Team</a>
                    </a>
                </div>
            </div>
        )
    }
}
