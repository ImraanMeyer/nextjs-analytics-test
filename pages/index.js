import Layout from '../components/Layout';   //Import the Link API to support client-side navigation
import Image from 'react-bootstrap/Image';   //Bootstrap image

const Index = () => (
<Layout>
    <div>
        {/* start page data*/}
            <h1>Chris Potgieter</h1>
            <h6>Web Developer</h6>
        
            <Image src="https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" rounded />
    
    <style jsx>{`
    //center text
    h1, h6{
        text-align: center}  
    `}</style>
</div>
    </Layout>
)
export default Index;

