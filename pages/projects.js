import Layout from '../components/Layout'; //Import the Link API to support client-side navigation
import Image from 'react-bootstrap/Image'

const Projects = () => (
    <Layout>
    <div> 
        {/*display projects with links*/}
<div>
    <h1>Add to cart website</h1>
    <p>Wine and Cheese online store </p>
    <Image src="/static/images/cheeseAndWine.png/" rounded width="40%" />
    <br></br>
    <a href="https://github.com/ChrisPotgieter/WineAndCheeseAddToCart" target="_blank" class="cta">Veiw Details</a> {/*github link*/}
</div>
<div>
    <h1>Minesweeper Game</h1>
    <br></br>
    <Image src="/static/images/minesweeper.png/" rounded width="50%" />
    <br></br>
    <a href="https://github.com/ChrisPotgieter/MinesweeperGame" target="_blank" class="cta">Veiw Details</a>       {/*github link*/}             
    <br></br>
    <a href="https://minesweeperchris.herokuapp.com/" target="_blank" class="cta">Veiw Game on Heroku</a>  {/*Heroku Link*/}
                        
</div>
                
            <style jsx>{`
            //center text
         *{
        text-align:center;
             
        //style text
        }
        h1,p {
        font-size: 3rem;
        font-weight: 300;
        margin: 1rem 0;
             }
    
    `}</style>
            </div>
    </Layout>
)

export default Projects;

