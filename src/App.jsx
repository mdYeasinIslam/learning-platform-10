
import './App.css'
import Root from './Routes/Root'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <div>
      <ToastContainer/>
      <Root />
    </div>
  )
}

export default App
