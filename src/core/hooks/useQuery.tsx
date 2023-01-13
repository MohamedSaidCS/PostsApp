import { useCallback, useEffect, useState } from 'react';
import { axiosInstance } from '../axiosInstance/axiosInstance';

const useQuery = (url: string) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	const fetch = useCallback(async (url: string) => {
		try {
			const response = await axiosInstance(url);
			setData(response.data);
		} catch (e) {
			setError(true);
		} finally {
			setLoading(false);
		}
	}, [url]);

	useEffect(() => {
		fetch(url);
	}, [url]);

	return { data, loading, error };
};

export default useQuery;