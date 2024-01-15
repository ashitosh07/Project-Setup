// material-ui
import { Box, IconButton, Link, useMediaQuery } from '@mui/material';
import { IconLanguage } from '@tabler/icons-react';

// project import
import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';
import TheamSwitch from './TheamSwitch';
import LanguageSelect from '../../../../language/languageSelect';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <>
      {!matchesXs && <Search />}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

      <TheamSwitch />
      {/* <IconButton
        // component={Link}
        // target="_blank"
        disableRipple
        color="secondary"
        title=""
        sx={{ color: 'text.primary', bgcolor: 'grey.100', ml: 1 }}
      > */}
      {/* <IconLanguage strokeWidth="1.25" /> */}
      <LanguageSelect />
      {/* </IconButton> */}

      <Notification />
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
