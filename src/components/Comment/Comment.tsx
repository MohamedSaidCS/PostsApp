import { IComment } from '../../interfaces/IComment';
import { FC } from 'react';

interface CommentProps {
	comment: IComment;
}

const Comment: FC<CommentProps> = ({ comment }) => {
	return (
		<div key={comment.id} className={'mt-4 bg-gray-100 rounded p-2'}>
			<p className={'font-semibold'}>{comment.name}</p>
			<p className={'text-xs'}>{comment.email}</p>
			<p className={'mt-2'}>{comment.body}</p>
		</div>
	);
};

export default Comment;