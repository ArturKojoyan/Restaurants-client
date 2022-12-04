import RestaurantsPage from './components/pages/Home'
import Restaurant from './components/pages/Restaurant';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<RestaurantsPage/>}/>
        <Route path='/restaurant/:id' element={<Restaurant/>} />
      </Routes>
    </main>
  );
}

export default App;
