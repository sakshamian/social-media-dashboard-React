import './App.css';
import Heading from './Heading.js';
import UpperCards from './UpperCards';
import Overview from './Overview';
import LowerCards from './LowerCards';

function App(){
  
  return (
      <div className='main'>
        <Heading></Heading>
        <UpperCards ></UpperCards>
        <Overview></Overview>
        <LowerCards></LowerCards>
      </div>
  );

}

export default App;
