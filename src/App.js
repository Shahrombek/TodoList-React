import { useState } from 'react';
import './App.css';
import Header from './Container/Header/Header';
import ProductsContext from './Context/ProductsContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './Pages/Form/Form';
import CardBody from './Pages/CardBody/CardBody';

function App() {
  const [cards, setCards] = useState([
    // {
    //   id: 0,
    //   text: 'currently typing',
    //   completed: false,
    // },
    // {
    //   id: 1,
    //   text: '10 minutes medition',
    //   completed: false,
    // },
    // {
    //   id: 2,
    //   text: 'Read for 1 hour',
    //   completed: false,
    // },
  ]);




  return (
    <ProductsContext.Provider value={{ cards, setCards }}>
      <div className="App ">
        <div className='img'></div>
        <div className='todolist '>
          <Header />
          <Form />
          <CardBody />

        </div>
      </div>
    </ProductsContext.Provider>
  );
}

export default App;
