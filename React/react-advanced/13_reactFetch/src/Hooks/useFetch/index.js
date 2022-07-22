import React, { useState } from 'react'

export default function useFetch(obj, cb) {
    const { requestType, requestUrl } = obj;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const fetchData = async (body) => {
        try {
            setLoading(true);
            setError(null);
            const res = await fetch("http://localhost:1337/api/" + requestUrl, {
                method: requestType || 'get',
                body: body ? JSON.stringify({ data: body }) : null,
                headers: {
                    "Content-type": "application/json",
                },
            });
            if (res.ok) {
                const data = await res.json();
                cb && cb();
                setData(data.data);
            } else {
                throw new Error('数据加载失败！');
            }
        } catch (e) {
            console.log('error', e);
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }
    return {
        data,
        loading,
        error,
        fetchData,
    }
}
