import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './modules/details/Details';
import Layout from './modules/Layout/Layout';
import Plans from './modules/plans/Plans';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Plans/>}></Route>
        <Route path='details' element={<Details />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
