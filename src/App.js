import './App.css';
import Header from './Componts/header/header'
import Main from './Componts/main/main'
import Separator from './Componts/separator/separator';

function App() {
  return (
    <div className='home'>
      <Header/>
      <Main heading="Showcase your app beautifully." heading2="Launch your mobile app landing page faster with this free, open source theme from Start Bootstrap!"/>
      <Separator/>
    </div>
   
  );
}

export default App;
