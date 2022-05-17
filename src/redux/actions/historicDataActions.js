import * as api from '../../api/data'

export const getTwentyFourHoursData = () => async (dispatch) => {
    try {
        dispatch({ type: 'startTwentyFourHoursData' })
        const { data } = await api.getHistoricData()
        dispatch({ type: 'setTwentyFourHoursData', payload: data })
    }
    catch (err) {
        dispatch({ type: 'setTwentyFourHoursDataError', payload: err })
        console.log(err)
    }
}
