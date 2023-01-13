import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { useEffect, useState } from 'react';
import AddPost from '../../components/AddPost/AddPost';

const Home = () => {
	const navigate = useNavigate();
	const [popup, setPopup] = useState(false);

	useEffect(() => {
		navigate('/posts');
	}, []);

	return (
		<>
			<Header openPopup={() => setPopup(true)} />
			<Outlet />
			{popup && <AddPost closePopup={() => setPopup(false)} />}
		</>
	);
};

export default Home;