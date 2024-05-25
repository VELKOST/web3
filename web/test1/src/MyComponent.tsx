// MyComponent.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent({ count, setCount }: { count: number; setCount: React.Dispatch<React.SetStateAction<number>> }) {
    const [data, setData] = useState<Array<{ id: number; title: string }>>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get('https://localhost:7220/api/TodoItems')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [count]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Todo Items</h1>
            {data.length > 0 ? (
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            ) : (
                <p>No data available.</p>
            )}
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default MyComponent;
