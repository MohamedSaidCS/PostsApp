import { FC, FormEvent, useState } from 'react';
import useMutation from '../../core/hooks/useMutation';
import { useNavigate } from 'react-router-dom';

interface AddPostProps {
	closePopup: () => void;
}
const AddPost: FC<AddPostProps> = ({ closePopup }) => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		title: '',
		body: '',
	});
	const [error, setError] = useState(false);

	const { mutate, loading } = useMutation('post', 'posts');

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError(false);
		if (!formData.title || !formData.body) {
			setError(true);
			return;
		}
		await mutate(formData);
		closePopup();
		navigate('/posts');
	};

	return (
		<div className={'fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-4'}>
			<div className={'bg-white w-full md:w-1/2 flex flex-col rounded p-4'}>
				<div className={'flex justify-between items-center'}>
					<h1 className={'text-lg md:text-2xl font-semibold'}>Add Post</h1>
					<button onClick={closePopup} className={'text-2xl font-semibold'}>X</button>
				</div>
				<hr className={'my-2'}/>
				<form onSubmit={handleSubmit}>
					<div className={'flex flex-col gap-4 mt-4'}>
						<label htmlFor={'title'} className={'md:text-xl font-medium'}>Title</label>
						<input type={'text'} id={'title'} className={'border rounded px-2 py-1'} onChange={(e) => setFormData({...formData, title: e.target.value})} />
						{error && !formData.title && <p className={'text-red-500 text-sm -mt-4'}>Title is required.</p>}
					</div>
					<div className={'flex flex-col mt-4 gap-4'}>
						<label htmlFor={'body'} className={'md:text-xl font-medium'}>Body</label>
						<textarea id={'body'} className={'border rounded px-2 py-1'} onChange={(e) => setFormData({...formData, body: e.target.value})} />
						{error && !formData.body && <p className={'text-red-500 text-sm -mt-4'}>Body is required.</p>}
					</div>

					<button type={'submit'} disabled={loading} className={'mt-4 md:self-start bg-cyan-700 hover:bg-cyan-800 disabled:bg-gray-500 px-2 py-2 text-xs md:px-4 md:py-2 md:text-base rounded text-white transition-colors'}>Add Post</button>
				</form>
			</div>
		</div>
	);
};

export default AddPost;