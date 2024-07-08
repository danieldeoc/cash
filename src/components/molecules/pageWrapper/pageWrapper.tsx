import { FC } from 'react';
import { PageWrapperProps } from './types';
import { Box, Typography, colors } from '@mui/material';

const PageWrapper: FC<PageWrapperProps> = ({
  title,
  firstCommands,
  children,
}) => {
  return (
    <Box minHeight={'100vh'} width={'100%'} p={5} boxSizing={'border-box'}>
      <Box display={'flex'} justifyContent={'space-between'} mb={5}>
        <Typography component={'h1'} variant='h4'>
          {title}
        </Typography>

        {firstCommands && <Box>{firstCommands}</Box>}
      </Box>
      {children}
    </Box>
  );
};

export default PageWrapper;
