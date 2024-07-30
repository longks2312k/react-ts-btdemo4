import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css';
import Profile from './pages/Profile';
import Payment from './pages/Payment';
import ThemeContextProvider from './contexts/ThemeContext';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <Routes>
          <Route path='/' element={<Profile/>}/>
          <Route path='/tables' element={<Payment/>}/>
        </Routes>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
