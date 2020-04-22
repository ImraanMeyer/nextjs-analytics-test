import Layout from '../components/Layout'; //Import the Link API to support client-side navigation

const About = () => (
    <Layout>
<div>
    {/*About me data*/}
    <h1>About</h1>
    <h6>Myself</h6>
    <p> I'm a web-developer based in Gauteng South-Africa. Interested in everything to do with technology, I love creating, building and designing new things and hopefully I can create something that you will like.
    </p>
{/*fun facts about me*/}
    <h6>Radom Facts</h6>
    <ul>
        <li>I drink a lot of coffee.</li>
        <li>Would love to live in Canada.</li>
        <li>Enjoy cooking and eating.</li>
        <li>I hit the gym regulary.</li>
        <li>Would love to open my own tech compony</li>
    </ul>
{/*education data*/}
    <h1>Education</h1>
    <p>Matric with university exemption</p>
{/*Work experience data*/}
    <div class="section-heading">
        <h1>Work Experience</h1>
        <h6>Past and Current jobs</h6>
    </div>
    <div>
        <ul>
            <li>
                <h1>Controller 2017- 2018</h1>
                <p>Worked at a truck and shipping company GroundCover as an controller. Monitoring shipments and managing truck drivers
                </p>
            </li>
            <li>
                <h1>Coding 2019- 2020</h1>
                <p>Worked in coding for company called MQattach. Used delphi ,postgreSQLand mySQL to develop school databases.
                </p>
            </li>

        </ul>
    </div>

            <style jsx>{`
            //center text
    h1, h6, ul, p{
        text-align: center;
        font-size: 28px;
    }
    //no bullets
    li{
        list-style:none;
    } 
    `}</style>
        </div>
    </Layout>
)
export default About;

