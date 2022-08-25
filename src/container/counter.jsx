import React, { useState} from 'react';
import { increment, decrement, incValue } from '../redux/count/action';
import { getCount } from '../redux/count/selectors'
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
    const dispatch = useDispatch()
    const selector = useSelector(state => state)
    const [countInput, setCountInput] = useState(0)
    const count= getCount(selector)
    const incre = () => {
        dispatch(increment())
    }
    const decre = () => {
        dispatch(decrement())
    }


    const custom = () => {

        dispatch(incValue(countInput))
    }




    return (
        <section className='box'>
            <div className='inde'>
                <button onClick={incre}>Increment</button>
                <button onClick={decre}>Decrement</button>
            </div>
            <p>{count}</p>
            <div className='incby'>
                <button onClick={custom}>Increment by</button><br />
                <input type="text" onChange={(e) => setCountInput(e.target.value)} />
            </div>
        </section>
    )
}



export default Counter
