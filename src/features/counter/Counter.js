import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementAsync, selectCount } from './counterSlice'

const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(incrementAsync())
    }, [dispatch])
    return (
        <div>

        </div>
    )
}

export default Counter
