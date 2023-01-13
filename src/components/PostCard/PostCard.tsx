import { Link } from 'react-router-dom';
import image from '../../assets/image.jpg';
import { IPost } from '../../interfaces/IPost';
import { FC } from 'react';

interface PostCardProps {
	post: IPost;
}
const PostCard: FC<PostCardProps> = ({ post }) => {
	return (
		<Link to={''+post.id} key={post.id} className={'flex flex-col md:flex-row justify-start gap-2 md:gap-4 w-full'}>
			<img className={'w-full md:w-1/6'} src={image} alt={'image'} />
			<div className={'flex flex-col'}>
				<p className={'font-medium text-sm md:text-lg'}>{post.title}</p>
				<div className={'text-xs md:text-sm'}>{post.body}</div>
			</div>
		</Link>
	);
};

export default PostCard;