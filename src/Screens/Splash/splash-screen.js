
import './splash.css';
import { ReactComponent as Splash } from '../../Images/todo_splash.svg';
import { useNavigate } from 'react-router-dom';


function SplashScreen() {

  const naviagte = useNavigate();

  function moveToNext() {
    naviagte('/dashboard');
  }

  return (
    <div className="App">
      <Splash className='logo img-fluid mt-4' />
      <div className='mt-4 pt-4 '>
        <p className='cursiveStyle h1 p-2'>“Subtracting from your list of priorities is as important as adding to it.”</p>
        <button type="button" className="btn btn-danger btn-lg" onClick={moveToNext}>Let's Todo it !!</button>
      </div>

    </div>
  );
}

export default SplashScreen;
