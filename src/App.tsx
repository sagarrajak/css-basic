import { Route, Routes } from 'react-router-dom';
import './App.css';
import Customer from './modules/customer/Customer';
import Details from './modules/details/Details';
import Layout from './modules/Layout/Layout';
import Plans from './modules/plans/Plans';
import { StartHosting } from './starthosting/StartHosting';

function App() {
  const hideButtons  = () => {
    let backdrop: any = document.querySelector(".backdrop");
    let model: any = document.querySelector(".modal");

    if (backdrop && backdrop.style) {
      backdrop.classList.remove('open');
      setTimeout(() => {
        backdrop.style.display = 'none';
      }, 10);
    }
    if (model && model.style) {
      model.classList.remove('open');
    }
  };

  return (
    <>
      <div className='backdrop' onClick={hideButtons}></div>
      <div className="modal">
        <h1 className="modal__title">Do you want to continue?</h1>
        <div className="modal__actions">
            <a href="start-hosting/index.html" className="modal__action">Yes!</a>
            <button className="modal__action modal__action--negative" type="button" onClick={hideButtons}>No!</button>
        </div>
    </div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Plans />}></Route>
          <Route path='details' element={<Details />}></Route>
          <Route path='customer' element={<Customer />}></Route>
          <Route path='start-hosting' element={<StartHosting />}></Route>
        </Route>
      </Routes>
    </>

  );
}

export default App;
