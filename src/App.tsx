import './App.css';
import MoreSelector from './module4/more-selector/MoreSelector';
import Basic from './modules/basic/Basic';
import Boxes from './modules/boxes/Boxes';
import Navigation from './modules/nav/navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Boxes/>
      {/* <Basic/>
      <MoreSelector/> */}
    </div>
  );
}

export default App;
