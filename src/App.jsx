import { Provider } from 'react-redux';
import store from './utils/Store';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import { Navbar, Body, Watch,ErrorPage,Content } from './components';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Content />,
      },
      {
        path: "/watch/:id",
        element: <Watch />,
      },
    ],
    errorElement:<ErrorPage />
  },
]);



const App = () => {
  return (
    <Provider store={store}>
      <div className="App w-full bg-white min-h-screen">
        <Navbar />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
    
  );
  
};


export default App;
