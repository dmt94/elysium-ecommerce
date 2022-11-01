import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation'
import Home from './routes/home/home.component';
import SignIn from './routes/sign-in/sign-in.component';

const Shop = () => {
  return (
    <h1>I am the shop page</h1>
  )
}
//index = home, true
const App = () => {
 return (
  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />}>
      </Route>
      <Route path='shop' element={<Shop />} />
      <Route path='sign-in' element={<SignIn />} />
    </Route>
  </Routes>
 )
}

export default App;
