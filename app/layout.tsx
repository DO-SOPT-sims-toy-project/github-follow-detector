'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';

import GlobalStyle from './_styles/Global';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@emotion/react';
import theme from './_styles/theme';

// import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };
const queryClient = new QueryClient();

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <body className={inter.className}>{children}</body>
        </ThemeProvider>
      </QueryClientProvider>
    </html>
  );
};

export default RootLayout;
