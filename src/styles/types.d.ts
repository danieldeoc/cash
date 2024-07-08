import '@mui/material/styles';
import '@mui/material/Typography';
import '@mui/material/Chip';
import '@mui/material/Paper';

declare module '@mui/material/styles' {
  interface ButtonVariants {
    navigatorButton: React.CSSProperties;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    navigatorButton: true;
  }
}
