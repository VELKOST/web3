
import { useState } from 'react';
import MyComponent from './MyComponent';

function App() {
    
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <MyComponent count={count} setCount={setCount} />
        </div>
    );
}

export default App;
