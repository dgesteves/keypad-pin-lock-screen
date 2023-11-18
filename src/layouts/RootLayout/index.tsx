import { Outlet, useLocation } from 'react-router-dom';
import { AppContextProvider } from '@context';
import { Header } from '@ui';
import { HomePage } from '@pages';

export function RootLayout() {
  const location = useLocation();

  return (
    <AppContextProvider>
      <Header />
      {location.pathname === '/' ? <HomePage /> : <Outlet />}
    </AppContextProvider>
  );
}
