import * as api from '../../api/data'

export const getCurrentData = () => async (dispatch) => {
    try {
        dispatch({ type: 'startCurrentData' })
        const { data } = await api.getCurrentData()
        dispatch({ type: 'setCurrentData', payload: data })
    }
    catch (err) {
        dispatch({ type: 'setCurrentDataError', payload: err })
        console.log(err)
    }
}
