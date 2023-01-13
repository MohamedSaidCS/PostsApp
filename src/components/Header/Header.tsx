import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import {FC} from 'react';

interface HeaderProps {
	openPopup: () => void;
}
const Header: FC<HeaderProps> = ({ openPopup }) => {
	return (
		<div className={'flex justify-between items-center px-10 bg-gray-50 drop-shadow-xl'}>
			<img className={'w-32'} src={logo} alt={'logo'} />
			<Link to={'/posts'} className={'font-semibold text-lg'}>Social Media App</Link>
			<button onClick={openPopup} className={'bg-cyan-700 hover:bg-cyan-800 px-4 py-2 rounded text-white transition-colors'}>Add Post</button>
		</div>
	);
};

export default Header;