import { useState } from 'react';
import { Navbar } from './Navbar';
// import { Sidebar } from './Sidebar';
import { ThemeProvider } from 'context/ThemeContext';
import ClientThemeWrapper from 'context/ClientThemeWrapper';
import Footer from './Footer';

export const Layout = ({ children }: any) => {
  const [open, setOpen] = useState(true);

  return (
    <ThemeProvider>
      <ClientThemeWrapper>
        <div className="flex h-max dark:bg-gradient-to-br dark:from-cyan-800 dark:to-blue-900">
          {/* <Sidebar open={open} setOpen={setOpen} /> */}
          <div className="flex flex-col relative w-full">
            <Navbar open={open} setOpen={setOpen} />
            <div className="flex flex-col px-7 py-3">{children}</div>
            <Footer />
          </div>
        </div>
      </ClientThemeWrapper>
    </ThemeProvider>
  );
};
