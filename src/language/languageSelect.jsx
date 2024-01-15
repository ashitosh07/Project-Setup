import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TranslateIcon from '@mui/icons-material/Translate';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import { IconLanguage } from '@tabler/icons-react';
import { IconButton } from '@mui/material';
import lng from './lng';

const LanguageSelect = () => {
  const selected = localStorage.getItem('i18nextLng') || 'en';
  const { t } = useTranslation();

  const [menuAnchor, setMenuAnchor] = React.useState(null);
  React.useEffect(() => {
    document.body.dir = lng[selected]?.dir;
  }, [menuAnchor, selected]);

  return (
    <div className="d-flex justify-content-end align-items-center language-select-root">
      <IconButton
        disableRipple
        onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}
        sx={{
          px: 1,
          color: 'text.primary',
          bgcolor: 'grey.100'
          // '&:hover': {
          //   background: '#fff'
          // }
        }}
      >
        {/* <IconButton
          // component={Link}
          // target="_blank"
          disableRipple
          color="secondary"
          title=""
          sx={{ color: 'text.primary', bgcolor: 'grey.100', ml: 1 }}
        > */}
        {/* {lng[selected]?.label} */}
        {/* <TranslateIcon fontSize="small" /> */}
        <IconLanguage strokeWidth="1.25" />
        {/* </IconButton> */}
      </IconButton>
      <Popover
        open={!!menuAnchor}
        anchorEl={menuAnchor}
        onClose={() => setMenuAnchor(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <div>
          <List>
            <ListSubheader>{t('select_language')}</ListSubheader>
            {Object.keys(lng)?.map((item) => (
              <ListItem
                button
                key={item}
                onClick={() => {
                  i18next.changeLanguage(item);
                  setMenuAnchor(null);
                }}
              >
                {lng[item].label}
              </ListItem>
            ))}
          </List>
        </div>
      </Popover>
    </div>
  );
};

export default LanguageSelect;
