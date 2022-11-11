import './App.css';
import Details from './modules/details/Details';
import Footer from './modules/footer/Footer';
import Header from './modules/header/header';
import Plans from './modules/plans/Plans';

function App() {
  return (
    <div>
      <Header />
            <Plans/>
            {/* <Details/> */}
      <Footer/>
    </div>
  );
}

export default App;
