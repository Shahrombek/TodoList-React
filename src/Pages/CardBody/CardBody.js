import React, { useContext, useEffect, useState } from 'react'
import './CardBody.css'
import ProductsContext from '../../Context/ProductsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'
import CardFooter from '../CardFooter/CardFooter';
import { Route, Routes, useNavigate } from 'react-router-dom';

function CardBody() {

    const { cards, setCards } = useContext(ProductsContext);
    const navigate = useNavigate();


    let count = 0;
    const countTask = () => {
        cards.map((card) => {
            if (!card.completed) {
                count++
            }
        })
    }
    countTask();

    const deleteItem = (i) => {
        const arr = [...cards]
        arr.splice(i, 1)
        setCards([...arr])

        console.log(cards.length);
    }
    const isCheck = (i) => {
        const title = cards[i].text;
        const id = cards[i].id;
        const chek = [...cards];
        chek.splice(i, 1);

        if (cards[i].completed) {
            const obj = {
                id: id,
                text: title,
                completed: false,
            }
            chek.push(obj);
        } else {
            const obj = {
                id: id,
                text: title,
                completed: true,
            }
            chek.push(obj);
        }
        setCards(chek);
    }



    const clearCompletedAll = () => {
        const t = [];
        cards.map((item, i) => {
            if (!item.completed) {
                t.push(item)
            }
            setCards([...t])
            navigate('/')
        })

    }
    return (
        <div className='shadow mb-5' style={{ position: 'relative', borderRadius: "5px", overflow: 'hidden' }}>
            <div className='cardBody'>
                <Routes>
                    <Route path='/' element={
                        cards.length > 0 ? cards.map((card, index) => {
                            return <div key={index}>
                                <div className='taskDiv d-flex py-2 px-3'>
                                    <span onClick={() => isCheck(index)} className={`btnnn me-2 d-flex align-items-center justify-content-center `} style={{ fontSize: '12px' }}> {
                                        card.completed ? <FontAwesomeIcon icon={faCheck} /> : ''
                                    } </span>
                                    <div className='d-flex w-100 justify-content-between align-items-center'>
                                        <p className={`p-0 m-0 ${card.completed && 'trow'}`} >{card.text}</p>
                                        <button onClick={() => deleteItem(index)} style={{ fontWeight: 'light', border: 'none', background: 'transparent', color: 'gray', fontSize: '16px' }}> <FontAwesomeIcon icon={faXmark} /> </button>
                                    </div>
                                </div>
                            </div>
                        }) : <span style={{ color: 'grey', margin: '20px', display: 'block' }}>No task</span>
                    } />

                    <Route path='active' element={
                        cards.map((card, index) => {
                            return !card.completed && <div key={index}>
                                <div className='taskDiv d-flex py-2 px-3'>
                                    <span onClick={() => isCheck(index)} className={`btnnn me-2 d-flex align-items-center justify-content-center`} style={{ fontSize: '12px' }}> {
                                        card.completed ? <FontAwesomeIcon icon={faCheck} /> : ''
                                    } </span>
                                    <div className='d-flex w-100 justify-content-between align-items-center'>
                                        <p className={`p-0 m-0 ${card.completed && 'trow'}`} >{card.text}</p>
                                        <button onClick={() => deleteItem(index)} style={{ fontWeight: 'light', border: 'none', background: 'transparent', color: 'gray', fontSize: '16px' }}> <FontAwesomeIcon icon={faXmark} /> </button>
                                    </div>
                                </div>
                            </div>
                        })
                    } />

                    <Route path='completed' element={
                        cards.map((card, index) => {
                            return card.completed && <div key={index}>
                                <div className='taskDiv d-flex py-2 px-3'>
                                    <span onClick={() => isCheck(index)} className={`btnnn me-2 d-flex align-items-center justify-content-center`} style={{ fontSize: '12px' }}> {
                                        card.completed ? <FontAwesomeIcon icon={faCheck} /> : ''
                                    } </span>
                                    <div className='d-flex w-100 justify-content-between align-items-center'>
                                        <p className={`p-0 m-0 ${card.completed && 'trow'}`}>{card.text}</p>
                                        <button onClick={() => deleteItem(index)} style={{ fontWeight: 'light', border: 'none', background: 'transparent', color: 'gray', fontSize: '16px' }}> <FontAwesomeIcon icon={faXmark} /> </button>
                                    </div>
                                </div>
                            </div>
                        })
                    } />

                    <Route path='clearCompleted' element={
                        <div>
                            {
                                cards.map((card, index) => {
                                    return card.completed && <div key={index}>
                                        <div className='taskDiv d-flex py-2 px-3'>
                                            <span onClick={() => isCheck(index)} className={`btnnn me-2 d-flex align-items-center justify-content-center`} style={{ fontSize: '12px' }}> {
                                                card.completed ? <FontAwesomeIcon icon={faCheck} /> : ''
                                            } </span>
                                            <div className='d-flex w-100 justify-content-between align-items-center'>
                                                <p className={`p-0 m-0 ${card.completed && 'trow'}`} style={{ fontSize: '14px' }}>{card.text}</p>
                                                <button onClick={() => deleteItem(index)} style={{ fontWeight: 'light', border: 'none', background: 'transparent', color: 'gray', fontSize: '16px' }}> <FontAwesomeIcon icon={faXmark} /> </button>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                            <button onClick={clearCompletedAll} className='clear mb-5'>Clear all completed tasks</button>
                        </div>
                    } />
                </Routes>


                <div className='footer'>
                    <span style={{ color: 'gray' }}>{count}  items left</span>
                    <CardFooter />
                </div>
            </div >
        </div >
    )
}

export default CardBody