// import { Box, Typography } from "@mui/material";

// export default function Loading() {
//   return (
//     <Box
//         sx={{
//           my: 4,
//           mx: 4,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//        >
//         <Typography component="p" variant="h5">
//               Loading...
//         </Typography>
//     </Box>
//   )
// }

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import CircularProgress from '@mui/material/CircularProgress';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// export function Loading(props) {
//   return (
//     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
//       <CircularProgress variant="determinate" {...props} />
//       <Box
//         sx={{
//           top: 0,
//           left: 0,
//           bottom: 0,
//           right: 0,
//           position: 'absolute',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Typography variant="caption" component="div" color="text.secondary">
//           {`${Math.round(props.value)}%`}
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// Loading.propTypes = {
//   /**
//    * The value of the progress indicator for the determinate variant.
//    * Value between 0 and 100.
//    * @default 0
//    */
//   value: PropTypes.number.isRequired,
// };

// export default function CircularStatic() {
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return <Loading value={progress} />;
// }

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex', alignItems: "center",
    justifyContent: "center",
    alignContent: "center", marginTop: 10}}>
      <CircularProgress />
    </Box>
  );
}