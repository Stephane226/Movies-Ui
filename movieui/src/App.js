import logo from './logo.svg';
import './App.css';
import BlockApp from './components/blockApp';
import Ui from './components/ui';
import Header from './components/header' ;
import Footer from './components/footer';
import {apiLink} from './components/blockApp';
import {ApyData} from './components/blockApp'


function App() {
  return (
    <div className="App">
     <Header/>
     <BlockApp/>
     <Footer/>
    </div>
  );
}

export default App;
