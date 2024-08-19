import HomePage from '@/pages/Home';
import NewNotePage from '@/pages/NewNote';
import NoteDetailPage from '@/pages/NoteDetail';
import NoteListPage from '@/pages/NoteList';
import {
  createBrowserRouter as createRouter,
  RouterProvider,
} from 'react-router-dom';

const routes = [
  // Route object
  // { path?: string, element?: React.ReactNode | null }
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/notes',
    element: <NoteListPage />,
  },
  {
    path: '/notes/new',
    element: <NewNotePage />,
  },
  {
    path: '/notes/detail',
    element: <NoteDetailPage />,
  },
];

const router = createRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
