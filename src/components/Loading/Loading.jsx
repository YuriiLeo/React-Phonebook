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