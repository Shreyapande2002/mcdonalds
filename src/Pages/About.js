import React from "react";
import {Container,Row,Col} from 'react-bootstrap';
import aboutimg from '../Images/About2.jpeg'
import '../Styles/about.css'
function About(){
return(
    <div>
        <section className='About'>
            <Container>
                <Row>
                    <Col>
                    <hr/>
                    <h6>Home/About</h6>
                    </Col>
                </Row>
                <Row className="text-center py-4">
                    <h2 style={{color:'yellow',textDecoration:'underline',fontFamily:"fantasy"}}> McDonald's</h2>
                </Row>
                <hr/>
<Row>
    <p className="row-text"><b>Over the last 65 years, we’ve served a lot of burgers, fries and everything in between. Every step of the way, we’ve also served much more than just what you’ll find on our menu. “Now Serving” means we serve smiles, confidence, opportunity, connection and friendship.
    Now Serving also includes the comforting meals we provide following natural disasters and the support we give families through our partnership with Ronald McDonald House Charities® (RMHC®). In restaurants, it’s about recognizing crew members and offering ongoing education, scholarship and mentorship opportunities.
    Behind our counters are thousands of hardworking people who make our Golden Arches shine. We’re honored to recognize the vast and unique network of 1 in 8 Americans who can say they’ve done just that.</b></p>
</Row>
                <img src={aboutimg} height={300} style={{paddingBottom:'20px'}}></img>
            </Container>
        </section>
    </div>
)
}
export default About