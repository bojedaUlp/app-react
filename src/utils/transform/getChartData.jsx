import { toCelcius } from '../utils'
import moment from 'moment'

const getChartData = (data) => {
    const daysAhead = [0, 1, 2, 3, 4, 5]
    const days = daysAhead.map(d => moment().add(d, 'd'))
    const dataAux = days.map(day => {

        const tempObjArray = data.list.filter(item => {
            const dayOfYear = moment.unix(item.dt).dayOfYear()
            return dayOfYear === day.dayOfYear()
        })

        const temps = tempObjArray.map(item => item.main.temp)

        //dayHour min max
        return ({
            dayHour: day.format('ddd'),
            min: toCelcius(Math.min(...temps)),
            max: toCelcius(Math.max(...temps)),
            hasTemp: (temps.length > 0 ? true : false)
        })
    }).filter(item => item.hasTemp)
    return dataAux
}
export default getChartData