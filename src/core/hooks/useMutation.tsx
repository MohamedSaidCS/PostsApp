import { useCallback, useState } from 'react';
import { axiosInstance } from '../axiosInstance/axiosInstance';

const useMutation = (method: 'post' | 'patch' | 'delete', url: string) => {

	const [data, setData] = useState(null);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const mutate = useCallback(async (body: Record<string, any>) => {
		setLoading(true);
		try {
			const response = await axiosInstance[method](url, body);
			setData(response.data);
		} catch (e) {
			setError(true);
		} finally {
			setLoading(false);
		}
		return data;
	}, [method, url]);

	return { error, loading, mutate };
};

export default useMutation;