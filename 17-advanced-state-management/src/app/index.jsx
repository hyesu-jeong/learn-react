import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

import { AuthProvider } from '@/contexts/auth';
import { ThemeProvider } from '@/contexts/theme';
import router from '@/router';

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </AuthProvider>
      <Toaster />
    </>
  );
}

export default App;
