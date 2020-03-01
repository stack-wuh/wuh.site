export const increment = () => ({ type: 'INCREMENT' })
export const decrement = () => ({ type: 'DECREMENT' })

export const aIncrement = () => dispatch => {
    setTimeout(()=> {
        dispatch(increment())
        dispatch({
            type: 'A_INCREMENT'
        })
    }, 1000)
}

export const aDecrement = () => dispatch => {
    setTimeout(() => {
        dispatch(decrement())
        dispatch({
            type: 'A_DECREMENT'
        })
    }, 1000)
}