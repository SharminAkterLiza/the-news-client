import { Button, ListGroup } from "react-bootstrap";
import GoogleIcon from '../../../assets/googleIcon.jpg';
import GithubIcon from '../../../assets/githubIcon.jpg';
import './RightNav.css';
import { FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";
import PZone from "../PZone/PZone";

const RightNav = () => {
    return (
        <div className="w-75">
            <h4>Login With</h4>
             <Button variant="outline-primary">
                <img className="icon me-2" src={GoogleIcon} alt="" />

                Login with Google</Button>{' '}
             <Button variant="outline-primary mt-2">
                <img className="icon me-2" src={GithubIcon} alt="" />
                Login with Github</Button>{' '}


                <div>
                    <h4 className="mt-4">Find Us on</h4>

                    <ListGroup>
      <ListGroup.Item> <FaFacebookF></FaFacebookF>  Facebook</ListGroup.Item>
      <ListGroup.Item> <FaInstagram></FaInstagram> Instragram</ListGroup.Item>
      <ListGroup.Item> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
     
    </ListGroup>

    <PZone></PZone>
                </div>
        </div>
    );
};

export default RightNav;