import {
    slideQuery
} from '../../api/slide'

export const fetchSlideList = () => async dispatch => {
    const response = await slideQuery()
    dispatch({ type: 'SLIDE_SAVE', payload: response.data.data })
}