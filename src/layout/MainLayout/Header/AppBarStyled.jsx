import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { drawerWidth } from '../../../config';
import { useTranslation } from 'react-i18next';

const AppBarStyled = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => {
  const { t } = useTranslation();

  return {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
      marginLeft: t('select_language') === 'Select Language' ? drawerWidth : 'auto',
      marginRight: t('select_language') === 'اختار اللغة' ? drawerWidth : 'auto',

      width: `calc(100% - ${drawerWidth}px )`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    })
  };
});

export default AppBarStyled;
