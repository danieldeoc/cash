import { createTheme } from '@mui/material';

export const CashTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'navigatorButton' },
          style: {
            flexGrow: 1,
            justifyContent: 'flex-start',
            textTransform: 'none',
            padding: '0.75rem 1rem',
            borderRadius: '0.5rem',
            '& .MuiSvgIcon-root': {
              fill: 'white',
              width: '1rem',
              marginRight: '0.5rem',
            },
            '& .MuiTypography-root': {
              textTransform: 'none',
              fontWeight: 600,
              color: '#fff',
              fontSize: '0.85rem',
            },
          },
        },
      ],
    },
  },
});
