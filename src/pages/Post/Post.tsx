import { useParams } from 'react-router-dom';
import useQuery from '../../core/hooks/useQuery';
import { IPost } from '../../interfaces/IPost';
import { IComment } from '../../interfaces/IComment';
import image from '../../assets/image.jpg';
import Comment from '../../components/Comment/Comment';

const Post = () => {
	const { id } = useParams();
	const postQuery = useQuery(`posts/${id}`);
	const commentsQuery = useQuery(`posts/${id}/comments`);

	const post = (postQuery.data || {}) as IPost;
	const comments = (commentsQuery.data || {}) as IComment[];


	if (postQuery.loading || commentsQuery.loading) {
		return <p className={'p-6 font-semibold text-xl'}>Loading...</p>;
	}

	if (postQuery.error || !postQuery.data || commentsQuery.error || !commentsQuery.data) {
		return <p className={'p-6 font-semibold text-xl'}>Error.</p>;
	}


	return (
		<div className={'p-6 flex flex-col gap-6 items-start'}>
			<p className={'text-xl font-semibold'}>{post.title}</p>
			<img src={image} alt={'image'} />
			<div>{post.body}</div>

			<div className={'mt-6'}>
				<p className={'text-lg font-semibold'}>Comments</p>
				<div className={'mt-4'}>
					{comments.map((comment) => (
						<Comment key={comment.id} comment={comment} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Post;