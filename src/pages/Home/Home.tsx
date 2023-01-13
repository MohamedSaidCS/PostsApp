import { Outlet, Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { useState } from 'react';
import AddPost from '../../components/AddPost/AddPost';

const Home = () => {
	const [popup, setPopup] = useState(false);

	return (
		<>
			<Header openPopup={() => setPopup(true)} />
			{!location.pathname.includes('posts') && (
				<div className={'p-6'}>
					Click <strong>Social Media App</strong> or <Link to={'posts'} className={'text-blue-600'}>here</Link> to start.
				</div>
			)}
			<Outlet />
			{popup && <AddPost closePopup={() => setPopup(false)} />}
		</>
	);
};

export default Home;