import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css';
import Profile from './pages/Profile';
import Payment from './pages/Payment';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div>
      <ThemeContextProvider>
        {/* <Profile/> */}
        <Payment/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
