import Layout from "../components/Layout";
import Row from "../components/Row";
import Column from "../components/Column";
import ImageBox from "../components/ImageBox";
import Profile from "../components/Profile";
import SponsorCard from "../components/SponsorCard";
import Button from "../components/Button";

export default class Index extends React.Component {
    render(){
        return(
            <Layout>
                <div className="hero">
                    <div className="overlay">foop</div>
                    <div className="content">
                        <div style={{marginBottom:"5vh"}}>
                        <h1 className="title">Hack The New Year</h1>
                        <h2 className="subtitle">The best hackathon in all of the world that </h2>
                        <p>Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. Lorem ipsup dorem. </p>
                        </div>
                        <Button href="https://airtable.com/shrKfMOUBfP7jaEAx" val="Register!"/>
                    </div>
                    <div className="titleImage hidden-mobile">
                        <img className="logo" src="../static/htny-logo.png"/>
                    </div>
                </div>
                <div className="hero-norm" id="FAQ">
                    <Row>
                        <Column>
                            <h1>What is a hackathon?</h1>
                            <p>Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. Lorem ipsum lorem. </p>
                        </Column>
                        <Column>
                            <ImageBox src="https://cdn.glitch.com/3d283e0f-19c4-4546-b0b2-223ec3a7dc23%2Fworking.jpg?v=1565769221347" desc="poop poop i like that"/>
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <ImageBox src="https://cdn.glitch.com/3d283e0f-19c4-4546-b0b2-223ec3a7dc23%2Fworking.jpg?v=1565769221347" desc="poop poop i like that"/>
                        </Column>
                        <Column>
                            <h1>Why should you not come?</h1>
                            <p>No reason. COME</p>
                        </Column>
                    </Row>
                </div>
                <div style={{color:"white",marginLeft:"5vw",width:"90vw"}} id="team">
                    <h1>Our Sponsors</h1>
                    <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row",width:"100%"}}>
                        <SponsorCard src="../static/sponsor/balsamiq-logo.svg"/>
                        <SponsorCard src="https://cdn.glitch.com/747f5921-6fdc-45db-8eaa-ac12523e0e6c%2Fhackclub-bank.svg?v=1566159701206"/>
                    </div>
                </div>
                <div style={{color:"white",marginLeft:"5vw",width:"90vw"}} id="team">
                    <h1>Our Team</h1>
                    <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row",width:"100%"}}>
                        <Profile src="../static/profiles/jacob.jpg" name="Jacob Haap" desc="Executive Director"/>
                        <Profile src="../static/profiles/faham.png" name="Faham Tak" desc="Director of Marketing"/>
                        <Profile src="https://art.pixilart.com/383c8bbc4a92e09.gif" name="JP Mason" desc="Director of Hacker Experience"/>
                        <Profile src="../static/profiles/harshith.jpg" name="Harshith Iyer" desc="Director of Finance & Sponsorship"/>
                    </div>
                    <h1>Additional Help From</h1>
                    <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row",width:"100%"}}>
                        <Profile src="../static/profiles/neel.jpg" name="Neel Redkar" desc="Web Developer"/>
                    </div>
                </div>
                <div style={{color:"white",marginLeft:"5vw",width:"90vw"}} id="judges">
                    <h1>Judges</h1>
                    <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row",width:"100%"}}>
                        <Profile src="https://media1.giphy.com/media/xUPGcuPLCKs0LiYnCg/giphy.gif" name="Catto" desc="I. will. Judge. You."/>
                        <Profile src="https://media1.giphy.com/media/xUPGcuPLCKs0LiYnCg/giphy.gif" name="Catto" desc="I. will. Judge. You."/>
                        <Profile src="https://media1.giphy.com/media/xUPGcuPLCKs0LiYnCg/giphy.gif" name="Catto" desc="I. will. Judge. You."/>
                        <Profile src="https://media1.giphy.com/media/xUPGcuPLCKs0LiYnCg/giphy.gif" name="Catto" desc="I. will. Judge. You."/>
                        <Profile src="https://media1.giphy.com/media/xUPGcuPLCKs0LiYnCg/giphy.gif" name="Catto" desc="I. will. Judge. You."/>
                        <Profile src="https://media1.giphy.com/media/xUPGcuPLCKs0LiYnCg/giphy.gif" name="Catto" desc="I. will. Judge. You."/>
                        <Profile src="https://media1.giphy.com/media/xUPGcuPLCKs0LiYnCg/giphy.gif" name="Catto" desc="I. will. Judge. You."/>
                    </div>
                </div>
            </Layout>
        )
    }
}
