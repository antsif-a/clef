import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import RootRoute from '../routes/RootRoute';
import CircleRoute from '../routes/Circle';

export default function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootRoute />,
        },
        {
            path: '/circle',
            element: <CircleRoute />,
        },
    ]);

    return <RouterProvider router={router} />;
}
