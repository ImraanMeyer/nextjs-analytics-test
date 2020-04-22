import Layout from '../components/Layout'; //Import the Link API to support client-side navigation
const Contact = () => (
    <Layout>
<div>
    {/*headings*/}
<h1>Contact</h1>
<h6>Lets work together</h6>
{/*link to email*/}
<a href="mailto:chrispotjnr@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a><a href="mailto:chrispotjnr@gmail.com" target="_blank">chrispotjnr@gmail.com</a>
<br></br>
{/*link to github*/}
<a href="https://github.com/HotdogLLF" target="_blank"><i class="fab fa-github"></i></a><a href="https://github.com/HotdogLLF" target="_blank">https://github.com/HotdogLLF</a>

{/*social meadia contact*/}
<div class="social-media">
    <ul class="nav-list">
        <li>
            <a href='#' class="icon-link"></a>
            <i class="fab fa-facebook-square"></i>
        </li>
        <li>
            <a href='#' class="icon-link"></a>
            <i class="fab fa-twitter-square"></i>
        </li>

    </ul>
</div>
{/*jsx styl*/}
    <style jsx>{`
    //Center
    h1,h6,a,i,li,{
        text-align:center;
        list-style: none;        
    }   
    `}</style>
    </div>
    </Layout>
)

export default Contact;

