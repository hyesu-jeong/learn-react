import router from '@/routes/router';
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

export default App;
