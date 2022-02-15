import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react'
import ProductsContext from '../../Context/ProductsContext';


function Form() {

    const { cards, setCards } = useContext(ProductsContext);



    const [value, setValue] = useState('');
    const [check, setCheck] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: cards.length + 1,
            text: value,
        }

        setCards([...cards, newItem])
        setValue('')
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='form d-flex align-items-center px-3 py-2 rounded bg-white'>
                <span type='submit' className='btnnn me-2'>  </span>
                <input required type="text" value={value} placeholder='Add todo' onChange={handleChange} />
            </form>
        </div>
    )
}

export default Form