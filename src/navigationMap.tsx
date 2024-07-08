import { AccountBalance, Dashboard } from '@mui/icons-material';
import { NavigatorProps } from './components/molecules/navigator/types';
import { siteMap } from './siteMap/sitemap';

export const menuItens: NavigatorProps['menuItens'] = [
  {
    anchor: 'Dashboard',
    icon: <Dashboard />,
    destiny: siteMap.dashboard,
  },
  {
    anchor: 'Bank Accounts',
    icon: <AccountBalance />,
    destiny: siteMap.bankAccounts.home,
  },
];
