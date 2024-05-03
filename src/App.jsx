import { ToastContainer } from 'react-toastify'
import './App.css'
import CardList from './components/CardList'
import Forms from './components/Forms'
import Navi from './components/Navi'
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <ToastContainer/>
      <Navi/>
      <Forms/>
      <CardList/>
    </>
  )
}

export default App