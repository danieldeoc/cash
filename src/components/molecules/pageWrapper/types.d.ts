import { ReactNode } from 'react';

export interface PageWrapperProps {
  title: string;
  firstCommands?: ReactNode;
  children: ReactNode;
}
