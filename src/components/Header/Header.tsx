import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FC } from 'react';

interface HeaderProps {
	openPopup: () => void;
}
const Header: FC<HeaderProps> = ({ openPopup }) => {
	return (
		<div className={'flex justify-between items-center px-1 md:px-10 bg-gray-50 drop-shadow-xl'}>
			<img className={'w-24 md:w-32'} src={logo} alt={'logo'} />
			<Link to={'/posts'} className={'font-semibold text-lg'}>Social Media App</Link>
			<button onClick={openPopup} className={'bg-cyan-700 hover:bg-cyan-800 px-2 py-2 text-xs md:px-4 md:py-2 md:text-base rounded text-white transition-colors'}>Add Post</button>
		</div>
	);
};

export default Header;