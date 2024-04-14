import './App.scss';
import { router } from 'app/'
import { RouterProvider } from 'react-router-dom';
import { useVH } from 'features';
import { Helmet } from 'react-helmet';

function App() {
  useVH()
  return (
    <>
      <Helmet>
        <title>YourTar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Helmet>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
