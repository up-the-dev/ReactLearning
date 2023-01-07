import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <video className="bg-cover-video" autoPlay loop muted playsInline>
          <source src='bg-cover-video.mp4' type='video/mp4' />
        </video>
        <div className='LogoText'>
          <h1 className='logotxt1'>Meal</h1>
          <h1 className='logotxt2'>It</h1>
        </div>

      </header>
    </div>
  );
}

export default App;
