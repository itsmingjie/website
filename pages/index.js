import Layout from "../components/Layout";
import Row from "../components/Row";
import Column from "../components/Column";
import ImageBox from "../components/ImageBox";
import Profile from "../components/Profile";
import SponsorCard from "../components/SponsorCard";
import Button from "../components/Button";
import Box from "../components/Box";

export default class Index extends React.Component {
    render(){
        return(
            <Layout>
                <div className="hero">
                    <div className="overlay">foop</div>
                    <div className="content">
                        <div style={{marginBottom:"5vh"}}>
                        <h1 className="title">Hack The New Year</h1>
                        <h2 className="subtitle">Be The Future</h2>
                        <p style={{fontSize:"1.5em"}}>January 11 - 12, 2020</p>
                        <p style={{marginTop:"10px"}}>Union Hall, 1311 Vine Street, Cincinnati, Ohio</p>
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
                            <p style={{fontSize:"1.2em"}}>A hackathon is a place where people come together to come together and hack (hack is a way to say make cool fun things)! You can build anything you want in 24 hours, with free food, drinks, and other forms of human sustenance</p>
                        </Column>
                        <Column>
                            <ImageBox src="https://cdn.glitch.com/3d283e0f-19c4-4546-b0b2-223ec3a7dc23%2Fworking.jpg?v=1565769221347" desc="Students gather into teams and learn to code! (Hack Penn)"/>
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <ImageBox src="https://angelhacks.org/static/venue/stickexchange.jpg" desc="Sticker Exchange! (Flagship Summit)"/>
                        </Column>
                        <Column>
                        </Column>
                    </Row>
                </div>
                <div id="faq" style={{color:"white",marginLeft:"5vw",width:"90vw"}}>
                    <Box>
                        <h1 style={{margin:"15px",fontSize:"2.3em",textAlign:"center"}}>Frequently Asked Questions</h1>
                        <div className="row">
                            <div className="inner">
                                <h2>Who can participate? 🔭</h2>
                                <p>Any student in grades 8-12 can participate. If you are above or below that please <a href="mailto:team@hacknewyear.com">email us</a> and we can work something out.</p>
                            </div>
                            <div className="inner">
                                <h2>What if I don't know how to code? 👾</h2>
                                <p>Perfect! Hack the New Year is open to all experience levels, anywhere from beginners to master hackers (like our lord and savior Elon Musk).</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="inner">
                                <h2>Do I need a team? 👨‍👧‍👧</h2>
                                <p>Everyone will need to work on a team of 2 - 4 people, but there are no choosing teammates before the event. Everyone will be randomly assigned to one at the event.</p>
                            </div>
                            <div className="inner">
                                <h2>How much does it cost? 💸</h2>
                                <p>It is completely free to attend Hack the New Year thanks to our amazing sponsors! We got you covered.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="inner">
                                <h2>Who runs this? 👨‍🏫</h2>
                                <p>Hack the New Year is ran by high school students across the Cincinnati area and Massachusetts, backed by an international non-profit organization called Hack Club, which creates communities of makers <a href="https://map.hackclub.com">all over the world.</a></p>
                            </div>
                            <div className="inner">
                                <h2>Is this supervised? 👍</h2>
                                <p>Yes, there will be background checked adults at the event the entire time.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="inner">
                                <h2>How do I get there? 🚗</h2>
                                <p>The event is located at Union Hall, 1311 Vine Street, Cincinnati, Ohio, 45202. We highly recommend that you have a parent drop you off as parking in the area is difficult. For those located outside the Cincinnati area, we are currently unable to provide travel assistance but urge you to check out <a href="https://grant.executebig.org">Execute Big's travel grants</a> if you want to come.</p>
                            </div>
                            <div className="inner">
                                <h2>Is there a theme? 🤖</h2>
                                <p>Our theme is futuristic as we move into the new year, and the start of the 2020s (the secret theme for cool kids is roaring 20s, but don't tell the other organizers about that).</p>
                            </div>
                        </div>
                    </Box>
                </div>
                <div style={{color:"white",marginLeft:"5vw",width:"90vw"}} id="sponsors">
                    <h1>Our Sponsors</h1>
                    <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row",width:"100%"}}>
                        <SponsorCard href="https://balsamiq.com" src="../static/sponsor/balsamiq-logo.svg"/>
                        <SponsorCard href="https://hackclub.com" src="https://cdn.glitch.com/747f5921-6fdc-45db-8eaa-ac12523e0e6c%2Fhackclub-bank.svg?v=1566159701206"/>
                        <SponsorCard href="https://www.sketch.com" src="../static/sponsor/sketch-logo.png"/>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <h1>Become a Sponsor!</h1>
                        <p>Contact us at <a href="mailto:team@hacknewyear.com">our email</a> and take <a href="../static/Prospectus.pdf">a look at prospectus</a>!</p>
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
                        <Profile src="../static/profiles/garret.jpg" name="Garrett Thompson" desc="Social Media Manager"/>
                    </div>
                </div>
                {/* <div style={{color:"white",marginLeft:"5vw",width:"90vw"}} id="judges">
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
                </div> */}
            </Layout>
        )
    }
}
