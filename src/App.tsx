import { Route, Routes } from 'react-router-dom';
import './App.css';
import Customer from './modules/customer/Customer';
import Details from './modules/details/Details';
import Layout from './modules/Layout/Layout';
import Plans from './modules/plans/Plans';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Plans />}></Route>
        <Route path='details' element={<Details />}></Route>
        <Route path='customer' element={<Customer />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
