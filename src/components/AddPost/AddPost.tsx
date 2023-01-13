import {FC} from 'react';

interface AddPostProps {
	closePopup: () => void;
}
const AddPost: FC<AddPostProps> = ({ closePopup }) => {
	return (
		<div className={'fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'}>
			<div className={'bg-white w-1/2 flex flex-col rounded px-4 py-2'}>
				<div className={'flex justify-between items-center'}>
					<h1 className={'text-2xl font-semibold'}>Add Post</h1>
					<button onClick={closePopup} className={'text-2xl font-semibold'}>X</button>
				</div>
			</div>
		</div>
	);
};

export default AddPost;