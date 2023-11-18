import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@layouts';
import { ErrorPage, WorkSpacePage } from '@pages';
import { JSX } from 'react';

function createRoute(path: string, element: JSX.Element): object {
  return {
    path,
    element,
  };
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [createRoute('/workspace', <WorkSpacePage />)],
  },
]);
