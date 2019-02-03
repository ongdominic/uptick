import React from "react"
import Logo from './logo.png'
import Fulllogo from './fulllogo.png'
import Heroimage from './heroimage.png'
import Learning from './learning.png'
import Analytics from './analytics.png'
import Infrastructure from './infrastructure.png'
import Modeling from './modeling.png'
import Course from './course.png'
import Shuming from './shumingpeh.png'
import Timothy from './timothy.png'
import Container from "../components/container"


const IndexPage = () => (
    <Container>
    <div>
    <div style={{
        display: 'flex',
        flexDirection:'horizontal',
        alightItem:'center'
    }}>
        <div style={{
            flex:1,
        }}>
        <img style={{
            maxWidth: '80px'
        }}
        src={Logo} alt=''/>
        </div>
        <div style={{
            flex:1
        }}>
            <h4>EXPERTISE</h4>
        </div>
        <div style={{
            flex:1
        }}>
            <h4>DATA SCIENCE COURSE</h4>
        </div>
        <div style={{
            flex:1
        }}>
            <h4>TEAM</h4>
        </div>
        <div style={{
            flex:1
        }}>
            <h4>CONTACT</h4>
        </div>
        <div style={{
            flex:1,
        }}>
            <h4>BLOG</h4>
        </div>
    </div>
    <img style = {{
        maxWidth :'100%'
    }}
    src={Heroimage} alt=''/>

    <h1>UpTick</h1>
    <h3>We love data and the work we do. We work closely with our clients to deliver the best possible solutions for their needs.</h3>
    <button>Contact us today!</button>

    <h2>EXPERTISE</h2>

    <div style={{
        display : 'flex',
        flexDirection : 'horizontal'
    }}>
        <div style = {{
        flex: 1
    }}>
    <img src = {Learning} alt='' />
    <h5>Learning</h5>
    <p>New to Data Science? Not to worry, join our Intro to Data Science course to learn more.</p>
    </div>
        <div style = {{
        flex: 1
    }}>
        <img src = {Infrastructure} alt='' />
        <h5>Infrastructure</h5>
        <p>Half the battle is won with a robust and structured data infrastructure. We can help you to achieve it.</p>
    </div>
        <div style = {{
        flex: 1
    }}>
        <img src = {Analytics} alt='' />
        <h5>Analytics</h5>
        <p>How can I improve my conversion rate? Why are my products not selling well? Fret not, we can assist you to answer these questions.</p>
    </div>
        <div style = {{
        flex: 1
    }}>
        <img src = {Modeling} alt='' />
        <h5>Modeling</h5>
        <p>Providing simple yet elegant models to solve your needs is what we thrive for.</p>
    </div>

    </div>

    <br/>

    <h2>DATA SCIENCE COURSE</h2>
    
    <div style={{
        display: 'flex',
        flexDirection: 'horizontal'
    }}
    >
    <div style={{
        flex: 1
    }}
    >
        <p>We are currently still backdating and creating lesson slides for our course. We hope to have it completed by end of February 2019, and translate it into an actual online course on udemy sometime in April 2019.</p>

        <p>As of now, we are teaching every Saturday from 1030 - 1330 at 39 Robinson Road, Level 9. Do reach out if you are interested; at the moment, we are at part 8.</p>
        <button>Read More</button>
    </div>

    <div style={{
        flex:1
    }}>
        <img src = {Course} alt=''/>
    </div>
        
    </div>

    <br/>
    
    <h2>TEAM</h2>

    <div style={{
        display: 'flex',
        flexDirection: 'horizontal'
    }}>
        <div style={{
            flex:1
        }}>
            <h5>Our Goal</h5>
            <p>UpTick is made up of two data science professionals, ShuMing and Timothy. There are a few motivations of starting UpTick. </p>
            <p>We hope to apply data science for SME/start ups that might not have considered it or have little funding but still wish to leverage from data science.</p>
            <p>We are currently creating an online data science course, that focuses on the mathematical foundation in hope to bridge the gap of understanding the underlying components of (ML) models. </p>
            <p>We hope to educate the public (or clients) with our blog, of what data science can solve and make it relatable with our daily problems and musings.</p>
        </div>
        <div style={{
            flex:1
        }}>
            <img src = {Fulllogo} alt=""/>
        </div>
        </div>
        <h5>Team Members</h5>
        <div style={{
            display:'flex',
            flexDirection: 'horizontal'
        }}>
            <div style={{
                flex:1
            }}>
                <img src={Shuming} alt=''/>
                <h5>PehShu Ming</h5>
                <p>I am a Data Scientist at Skyscanner, overlooking its non-flight verticals, and currently working on predictive models for user behavior and SEO ranking. For more information, check out my personal website.</p>
            </div>
            <div style={{
                flex:1
            }}>
                <img src={Timothy} alt=''/>
                <h5>Timothy Ong</h5>
                <p>I am currently a Data Analyst at Shopee, an e-commerce company. I am experienced in building and maintaining data pipelines, data reporting, and data visualizations. Being passionate in data analytics, I have decided to help businesses and individuals make better decisions with data.</p>
            </div>
        </div>
    
    <br/>

    <div style={{
        alignment:'center'
    }}>
    <h2>CONTACT</h2>
    <h3>How can we help you today?</h3>
    <p>Email: info@up-tick.com</p>
    <p>Phone: +65 1234 1234</p>
    <p><em>Ask us for our case studies</em></p>
    </div>

    </div>

    <div>
        <h6>Designed and developed by Dominic. Icons by Freepix from Flaticons.</h6>
        <h6>Uptick (c) 2019. All rights reserved.</h6>
    </div>
</Container>
)

export default IndexPage
