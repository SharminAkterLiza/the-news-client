import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/newsLogo.png';
import './Header.css';
import moment from 'moment';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container className='bg-dark-blue mt-4'>
            <div>
            <Navbar collapseOnSelect expand="lg" className=" bg-dark-blue text-white">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className="text-white">Home</Nav.Link>
            <Nav.Link href="#pricing" className="text-white">About</Nav.Link>
            <Nav.Link href="#pricing" className="text-white">Career</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="text-white">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="text-white">
            <Button variant="outline-light">Login</Button>{' '}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </div>
          <div className='text-center d-flex '>
        
          <img width={700} height={180} src={logo} className='mt-0 ms-0' alt="" />
            <p className='pUImg'>Journalism Without Fear or Favour</p>
<p className='ms-5 ps-5'>{moment().format("dddd, MMMM D, YYYY")}</p>
          </div>

          <div className='d-flex pb-2'>
          <Button variant="info w-25 text-white bold-900">Latest Information</Button>
          <Marquee pauseOnHover={true} speed={50}>
          Welcome to our digital hub, where news meets innovation, and information unfolds with elegance. At Yhe News, we are dedicated to delivering more than just headlines – we bring you a symphony of stories, thoughtfully curated and beautifully presented. Immerse yourself in a world of insightful reporting, captivating visuals, and engaging narratives. Whether you seek the latest updates, in-depth analysis, or stories that inspire, our platform is designed to be your trusted companion in the journey of staying informed. Explore, discover, and indulge in the artistry of storytelling at its finest. Welcome to a seamless blend of news and aesthetics; welcome to a new era of online journalism.
</Marquee>
          </div>

        

        </Container>
    );
};

export default Header;