import {
  Button,
  FormControl,
  FormControlLabel,
  Switch,
  TextField,
} from '@mui/material';
import PageWrapper from '../../components/molecules/pageWrapper/pageWrapper';

const ManageBankAccount = () => {
  return (
    <PageWrapper title='Open Bank Account'>
      <TextField label={'Bank Name'} />

      <TextField label={'Initial Deposit'} defaultValue={0} />

      <TextField label={'Opening Date'} />

      <FormControlLabel
        control={<Switch checked={true} name='Active' />}
        label='Active'
      />
      <Button onClick={() => alert('Cancel Opening')}>Cancel</Button>
      <Button onClick={() => alert('Open Account')}>Open</Button>
    </PageWrapper>
  );
};

export default ManageBankAccount;
