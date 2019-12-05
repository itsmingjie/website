export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navContainer">
                <div className="sidebar">
                    <div className="item" stye={{ display: "flex"}}>
                        <a href="google.com" style={{ display: "flex" }}><img src="../static/htny-logo.png" style={{ width: "100%", margin: "auto",maxWidth:"50px" }} /></a>
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
                </div>
            </div>
        )
    }
}
