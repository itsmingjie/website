export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navContainer">
                <div className="sidebar">
                    <div className="item" style={{ display: "flex"}}>
                        <a href="https://hacknewyear.com/" style={{ display: "flex" }}><img src="../static/htny-logo.png" style={{ width: "100%", margin: "auto",maxWidth:"50px" }} /></a>
                    </div>
                    <a href="#faq" className="item">
                        <p>FAQ</p>
                    </a>
                    <a href="#sponsors" className="item">
                        <p>Sponsors</p>
                    </a>
                    <a href="#team" className="item">
                        <p>Team</p>
                    </a>
                    <div className="item" style={{ display: "flex"}}>
                        <a href="https://hackclub.com/" style={{ display: "flex", float: "right" }}><img src="../static/hackclub-banner.svg" style={{ width: "100%", margin: "auto", float: "right", marginTop: -10 }} /></a>
                    </div>
                </div>
            </div>
        )
    }
}
