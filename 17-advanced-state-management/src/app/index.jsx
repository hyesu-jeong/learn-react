import { AuthProvider } from '@/contexts/auth';
import { ThemeProvider } from '@/contexts/theme';
import router from '@/router';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
