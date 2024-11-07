import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './store';

const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector((state) => state.counter.value);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Счетчик: {counterValue}</h1>
            <button onClick={() => dispatch(increment(1))}>+1</button>
            <button onClick={() => dispatch(decrement(1))} disabled={counterValue <= 0}>-1</button>
            <button onClick={() => dispatch(increment(10))}>+10</button>
            <button onClick={() => dispatch(decrement(10))} disabled={counterValue <= 0}>-10</button>
            <button onClick={() => dispatch(reset())}>Сброс</button>
        </div>
    );
};

export default Counter;
