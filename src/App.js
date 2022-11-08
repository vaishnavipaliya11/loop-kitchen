import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const {auth} = useSelector((store) => store.auth);
  console.log(auth);
  return (
    <div className="App">
      <h1>Loop kitchen</h1>
    </div>
  );
}

export default App;
