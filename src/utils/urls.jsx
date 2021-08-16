const appid = "74fdd14121470507faab374ed8477b72"

export const getWeatherUrl = ({city, countryCode}) => (
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
)

export const getForecastUrl = ({city,countryCode}) => (
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`
)