import { Navigate, useRoutes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Posts from '../../pages/Posts/Posts';
import Post from '../../pages/Post/Post';

const Routes = () => {
	return useRoutes([
		{
			path: '/', element: <Home />, children: [
				{ path: 'posts', element: <Posts /> },
				{ path: 'posts/:id', element: <Post /> },
			]
		},
		{ path: '*', element: <Navigate to={'/'} /> },
	]);
};

export default Routes;