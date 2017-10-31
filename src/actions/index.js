import axios from 'axios'

export const FETCH_POSTS = 'fetch_posts'

//const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
//const API_KEY = '?key=1234ina'

const WEATHER_KEY = '4bfcbe67a589c81d76ec19757576b5d5'
const WEATHER_URL = 'http://api.openweathermap.org/data/2.5/uvi/history?lat=37.75&lon=-122.37&start=1498049953&end=1498481991'

export function fetchPosts() {

	const request = axios.get(`${WEATHER_URL}&appid=${WEATHER_KEY}`)

	return (dispatch) => {
		request.then((data) => {
			dispatch({
				type: FETCH_POSTS,
				payload: data.data
			})
		})
	}

}


export const FETCH_WEATHER = 'fetch_weather'
export const FETCH_WEATHER_SUCCESS = 'fetch_weather_success'

export const fetchWeather = () => {

	const request = axios.get(`${WEATHER_URL}&appid=${WEATHER_KEY}`)

	return (dispatch) => {
		request
		.then((data) => {
			dispatch(fetchWeatherSuccess(data.data))
		})
		.catch((error) => {
			console.log(error)
		})
	}

}

export const fetchWeatherSuccess = (weather) => {
	return {
		type: FETCH_WEATHER_SUCCESS,
		weather
	}
}
