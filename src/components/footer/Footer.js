//STYLES
import "./Footer.css";

//LIBRARIES
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import {LocationOn, Phone, Email, Facebook, LinkedIn, Twitter, Instagram } from '@mui/icons-material';
import { Grid, Container, List, ListItem, ListItemText, Stack, IconButton } from '@mui/material';



//COMPONENTS


const Footer = () => {

    return (
        <div className="footer">
            <footer>
                <Container fixed disableGutters>
                    <Grid container  columnSpacing>
                        <Grid xs={8} className="grid">
                            <List dense>
                                <ListItem>
                                    <LocationOn />
                                <ListItemText primary=" Av.Urano 1.3M entre Neptuno y Pluton" />
                                </ListItem>
                                <ListItem>
                                    <Phone />
                                <ListItemText primary=" +999 11 0303456 " />
                                </ListItem>
                                <ListItem>
                                    <Email />
                                <ListItemText primary=" info@clavededo.com.ar " />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid xs={4}>
                            <h5 className="networks" >Seginos en :</h5>
                            <Stack direction="row" spacing={2}>
                                <IconButton>
                                    <Facebook />
                                </IconButton>    
                                <IconButton>
                                    <Instagram />
                                </IconButton>    
                                <IconButton>
                                    <Twitter />
                                </IconButton>    
                                <IconButton>
                                    <LinkedIn />
                                </IconButton>    
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </footer>
        </div>
    )
}

export default Footer;