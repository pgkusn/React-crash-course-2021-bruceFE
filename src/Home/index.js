import Edit from '../components/Edit';
import List from '../components/List';
import './index.css';

import { useState } from 'react';

function Home() {
    const [data, setData] = useState([]);
    return (
        <div className="app">
            <Edit add={setData} />
            <List listData={data} remove={setData} />
        </div>
    )
}

export default Home;