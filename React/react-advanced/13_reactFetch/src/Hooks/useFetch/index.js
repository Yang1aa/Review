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
            let res;
            switch (requestType.toLowerCase()) {
                case 'get':
                    res = await fetch(requestUrl);
                    break;
                case 'put':
                    res = await fetch(requestUrl, {
                        method: 'put',
                        body: JSON.stringify({ data: body }),
                        headers: {
                            "Content-type": "application/json",
                        },
                    })
                    break;
                case 'post':
                    res = await fetch(requestUrl, {
                        method: 'post',
                        body: JSON.stringify({ data: body }),
                        headers: {
                            "Content-type": "application/json",
                        },
                    })
                    break;
                case 'delete':
                    res = await fetch(requestUrl, {
                        method: 'delete',
                    })
                    break;
                default:
                    break;

            }
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
