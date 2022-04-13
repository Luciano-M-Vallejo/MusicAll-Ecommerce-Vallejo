//STYLES
import "./Footer.css";

//LIBRARIES
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Icon from '@mui/material/Icon';
import { green } from '@mui/material/colors';


//COMPONENTS


const Footer = () => {
    return (
        <div className="footer">
            <footer>
                <Icon>
                    <LocationOnIcon />
                </Icon>
                <h3>Direccion</h3>
                <h3>telefono</h3>
                <h3>email</h3>
                <h3>Seginos en :</h3>
            </footer>
        </div>
    )
}

export default Footer;