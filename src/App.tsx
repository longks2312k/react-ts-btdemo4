import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css';
import Profile from './pages/Profile';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div>
      <Profile/>
      {/* <Counter /> */}
    </div>
  );
}

export default App;
