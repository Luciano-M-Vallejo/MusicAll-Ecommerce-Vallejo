//STYLES
import "../../App.css";

//LIBRARIES
import * as React from 'react';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


//COMPONENTS


const ContactPage = () => {

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
    return (
      <div className='contact'>
            <Container fixed>
                    <MuiAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <MuiAccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><h2><strong>¿Hay stock de todos los productos?</strong></h2></Typography>
        </MuiAccordionSummary>
        <MuiAccordionDetails>
          <Typography>
                <h5>Todos los productos que publicamos están en stock. En caso de agotarse algún talle o color, esa característica se bloqueará, se verá color gris y no podrás seleccionarla.
                Haciendo click en el botón Consultar disponibilidad vas a poder realizar consulta de disponibilidad de stock y te enviaremos un email cuando haya stock nuevamente.</h5>
          </Typography>
        </MuiAccordionDetails>
      </MuiAccordion>
      <MuiAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <MuiAccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography><h2><strong>¿Hay algún límite de compra?</strong></h2></Typography>
        </MuiAccordionSummary>
        <MuiAccordionDetails>
          <Typography>
            <h5>Solo hasta agotar stock. Ahora si queres comprar muchos articulos te aconsejaría que te comuniques con nosotros via email "Ver abajo"</h5>
          </Typography>
        </MuiAccordionDetails>
      </MuiAccordion>
      <MuiAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <MuiAccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography><h2><strong>¿Puedo realizar la compra y que el producto lo busque otra persona?</strong></h2></Typography>
        </MuiAccordionSummary>
        <MuiAccordionDetails>
          <Typography>
                <h5>Si, solo al momento de comprar en "Observaciones" aclares la persona que va a retirar el o los productos y que este tenga a su vez la factura digital que sera enviada una vez echa la compra.
                En los datos incluir: Nombre, Apellido, DNI</h5>
          </Typography>
        </MuiAccordionDetails>
                </MuiAccordion>
                </Container>
    </div>
    )
}

export default ContactPage;