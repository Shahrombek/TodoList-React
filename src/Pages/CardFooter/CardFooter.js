import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

function CardFooter() {
    const navigate = useNavigate();
    return (
        <div>
            <div className='navigate'>
                <span onClick={() => navigate('')}>All</span>
                <span onClick={() => navigate('active')}>Active</span>
                <span onClick={() => navigate('completed')}>Completed</span>
                <span style={{ paddingLeft: '15px' }} onClick={() => navigate('clearCompleted')}>Clear Completed</span>
            </div>
        </div >
    )
}

export default CardFooter;