import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css';
import Profile from './pages/Profile';
import Payment from './pages/Payment';
import ThemeContextProvider from './contexts/ThemeContext';
import { Route, Routes } from 'react-router-dom';
import Baitap from './pages/lambt';

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <Routes>
          <Route path='/' element={<Profile/>}/>
          <Route path='/tables' element={<Payment/>}/>
        </Routes>
      </ThemeContextProvider>
      {/* <Baitap/> */}
    </div>
  );
}

export default App;
