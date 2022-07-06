import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    
      <div style={{ marginLeft:1,marginRight:1 }} >
      <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Педагог
          </Typography>
          <Typography sx={{ lineHeight:1,flexShrink: 1,
   color: 'blue'}}>
          
          <>Предмет 35 из 70</>
          <> Педагогика 9 из 30</>
          
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Педагог-модератор</Typography>
          <Typography sx={{ lineHeight:1,flexShrink: 1,
   color: 'blue'}}>
          
          <>Предмет 35 из 70</>
          <> Педагогика 9 из 30</>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Педагог-эксперт
          </Typography>
          <Typography sx={{ lineHeight:1,flexShrink: 1,
   color: 'blue'}}>
          
          <>Предмет 35 из 70</>
          <> Педагогика 9 из 30</>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Педагог-исследователь</Typography>
          <Typography sx={{ lineHeight:1,flexShrink: 1,
   color: 'blue'}}>
          
          <>Предмет 35 из 70</>
          <> Педагогика 9 из 30</>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sitamet egestas eros, vitae egestas augue. Duis vel est augue.
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Педагог-мастер</Typography>
          <Typography sx={{ lineHeight:1,flexShrink: 1,
   color: 'blue'}}>
          
          <>Предмет 63 из 70</>
          <> Педагогика 21 из 30</>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sitamet egestas eros, vitae egestas augue. Duis vel est augue.
            amet egestas eros, vitae egestas augue. Duis vel est augue.  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sitamet egestas eros, vitae egestas augue. Duis vel est augue.
            amet egestas eros, vitae egestas augue. Duis vel est augue.  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sitamet egestas eros, vitae egestas augue. Duis vel est augue.
            amet egestas eros, vitae egestas augue. Duis vel est augue.  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sitamet egestas eros, vitae egestas augue. Duis vel est augue.
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>

    

    
  );
}
