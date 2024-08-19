import { GlobalNav } from '@/components';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <main>
      <GlobalNav />
      <Outlet />
    </main>
  );
}

export default RootLayout;
