import Home from './components/pages/Home'
import Restaurant from './components/pages/Restaurant';
import { Routes, Route } from 'react-router-dom';
import { memo } from 'react';

function App() {
  return (
    <main>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/restaurant/:id' element={<Restaurant/>} />
      </Routes>
    </main>
  );
}

export default memo(App);
