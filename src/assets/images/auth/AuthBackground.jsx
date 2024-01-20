// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import logo from '../icons/logo-2.png';

// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackground = () => {
  const theme = useTheme();
  return (
    <Box sx={{ position: 'absolute', filter: 'blur(18px)', zIndex: -1, bottom: 0 }}>
      <img src={logo} alt="onebill" width="" />
    </Box>
  );
};

export default AuthBackground;
