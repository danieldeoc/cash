import { FC } from 'react';
import { NavigatorProps } from './types';
import {
  Box,
  Button,
  List,
  ListItem,
  ThemeProvider,
  Typography,
  colors,
} from '@mui/material';
import { CashTheme } from '../../../styles/theme';

export const Navigator: FC<NavigatorProps> = ({ title, menuItens }) => {
  return (
    <ThemeProvider theme={CashTheme}>
      <Box
        minHeight={'100vh'}
        width={'100%'}
        boxSizing={'border-box'}
        p={2}
        bgcolor={colors.blueGrey[900]}
      >
        <Typography
          component={'h2'}
          variant='body1'
          fontWeight={700}
          color={'#ffffff'}
          mb={2}
        >
          {title}
        </Typography>
        <List>
          {menuItens.map((item, key) => (
            <ListItem key={key} sx={{ p: 0 }}>
              <Button variant='navigatorButton' href={item.destiny}>
                {item.icon}
                <Typography component={'span'} variant='body1'>
                  {item.anchor}
                </Typography>
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </ThemeProvider>
  );
};

export default Navigator;
