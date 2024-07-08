import { Grid } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navigator from './components/molecules/navigator/navigator';
import { menuItens } from './navigationMap';
import BankAccountsPage from './pages/bankAccounts/bankAccounts';
import { ManageAccounts } from '@mui/icons-material';
import { siteMap } from './siteMap/sitemap';
import ManageBankAccount from './pages/bankAccounts/createAccount';

export const App = () => {
  const router = createBrowserRouter([
    {
      path: siteMap.homePage,
      element: <div>Dashboard</div>,
    },
    {
      path: siteMap.dashboard,
      element: <div>Dashboard</div>,
    },
    {
      path: siteMap.bankAccounts.home,
      element: <BankAccountsPage />,
    },
    {
      path: siteMap.bankAccounts.manage,
      element: <ManageBankAccount />,
    },
  ]);

  return (
    <Grid container>
      <Grid item xs={12} lg={3}>
        <Navigator title='Cash' menuItens={menuItens} />
      </Grid>
      <Grid item xs={12} lg={9}>
        <RouterProvider router={router} />
      </Grid>
    </Grid>
  );
};

export default App;
