// // import * as React from 'react';
// // import { styled } from '@mui/material/styles';
// // import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
// // import MuiAccordion from '@mui/material/Accordion';
// // import MuiAccordionSummary from '@mui/material/AccordionSummary';
// // import MuiAccordionDetails from '@mui/material/AccordionDetails';
// // import Typography from '@mui/material/Typography';

// // const Accordion = styled((props) => (
// //   <MuiAccordion disableGutters elevation={0} square {...props} />
// // ))(({ theme }) => ({
// //   border: `1px solid ${theme.palette.divider}`,
// //   '&:not(:last-child)': {
// //     borderBottom: 0,
// //   },
// //   '&:before': {
// //     display: 'none',
// //   },
// // }));

// // const AccordionSummary = styled((props) => (
// //   <MuiAccordionSummary
// //     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
// //     {...props}
// //   />
// // ))(({ theme }) => ({
// //   backgroundColor:
// //     theme.palette.mode === 'dark'
// //       ? 'rgba(255, 255, 255, .05)'
// //       : 'rgba(0, 0, 0, .03)',
// //   flexDirection: 'row-reverse',
// //   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
// //     transform: 'rotate(90deg)',
// //   },
// //   '& .MuiAccordionSummary-content': {
// //     marginLeft: theme.spacing(1),
// //   },
// // }));

// // const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
// //   padding: theme.spacing(2),
// //   borderTop: '1px solid rgba(0, 0, 0, .125)',
// // }));

// // export default function CustomizedAccordions({title, children}) {
// //   const [expanded, setExpanded] = React.useState('panel');

// //   const handleChange = (panel) => (event, newExpanded) => {
// //     setExpanded(newExpanded ? panel : false);
// //   };

// //   return (
// //     <div>
// //       <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
// //         <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
// //           <Typography>{ title }</Typography>
// //         </AccordionSummary>
// //         <AccordionDetails>
// //          {children}
// //         </AccordionDetails>
// //       </Accordion>
      
// //     </div>
// //   );
// // }
// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import { styled } from '@mui/material/styles';
// import MuiAccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
// import AddIcon from '@mui/icons-material/Add';

// const AccordionSummary = styled((props) => (
//   <MuiAccordionSummary
//     expandIcon={<AddIcon />}
//     {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === 'dark'
//       ? 'rgba(255, 255, 255, .05)'
//       : 'rgba(0, 0, 0, .03)',
//   flexDirection: 'row',
//   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
//     transform: 'rotate(45deg)',
//   },
//   '& .MuiAccordionSummary-content': {
//     marginLeft: theme.spacing(1),
//   },
// }));


// export default function CustomizedAccordions({title, children, expand}) {
//   const [expanded, setExpanded] = React.useState(false);

//     const handleChange = (event) => {
//         if (expanded === true) {
//             setExpanded(false);
//         } else {
//           setExpanded(true);
//         }
//    };

//   return (
//     <div>
//           <Accordion expanded={ expanded} onChange={handleChange}>
//         <AccordionSummary
          
//           aria-controls="panel1bh-content"
//           id="panel1bh-header"
//         >
//           <Typography sx={{ width: '100%', flexShrink: 0 }}>
//             {title}
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           {children}
//         </AccordionDetails>
//       </Accordion>
      
//     </div>
//   );
// }
