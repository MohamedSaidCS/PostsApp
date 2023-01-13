import useQuery from '../../core/hooks/useQuery';
import { IPost } from '../../interfaces/IPost';
import PostCard from '../../components/PostCard/PostCard';

const Posts = () => {
	const { data, loading, error } = useQuery('posts');
	const posts = (data || []) as IPost[];

	if (loading) {
		return <p className={'p-6 font-semibold text-xl'}>Loading...</p>;
	}

	if (error || !data) {
		return <p className={'p-6 font-semibold text-xl'}>Error.</p>;
	}

	return (
		<div className={'p-4 md:p-6'}>
			<p className={'text-xl font-semibold'}>All Posts</p>
			<div className={'mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center'}>
				{posts.map((post) => (
					<PostCard key={post.id} post={post} />
				))}
			</div>
		</div>
	);
};

export default Posts;