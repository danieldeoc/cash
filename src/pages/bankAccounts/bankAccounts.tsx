import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import PageWrapper from '../../components/molecules/pageWrapper/pageWrapper';
import { siteMap } from '../../siteMap/sitemap';

const BankAccountsPage = () => {
  const actionsLine = (
    <Box textAlign={'right'}>
      <Button
        variant='contained'
        onClick={() => (window.location.href = siteMap.bankAccounts.manage)}
      >
        Open Bank Account
      </Button>
    </Box>
  );
  return (
    <PageWrapper title='Bank Accounts' firstCommands={actionsLine}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableCell>Bank</TableCell>
            <TableCell>Current Balance</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Last movment</TableCell>
          </TableHead>
          <TableBody>
            <TableRow
              hover
              key={'linha'}
              sx={{ cursor: 'pointer' }}
              onClick={() => alert('row click')}
            >
              <TableCell>Bank</TableCell>
              <TableCell>Current Balance</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Last movment</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </PageWrapper>
  );
};

export default BankAccountsPage;
