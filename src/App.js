import { useState } from 'react';
import './App.css';
import Header from './Container/Header/Header';
import ProductsContext from './Context/ProductsContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './Pages/Form/Form';
import CardBody from './Pages/CardBody/CardBody';

function App() {
  const [cards, setCards] = useState([

  ]);




  return (
    <ProductsContext.Provider value={{ cards, setCards }}>
      <div className="App shadow">
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
