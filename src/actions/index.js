import axios from 'axios'

export const FETCH_POSTS = 'fetch_posts'

//const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
//const API_KEY = '?key=1234ina'

const WEATHER_KEY = '4bfcbe67a589c81d76ec19757576b5d5'
const WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?'


export function fetchPosts() {

	const request = axios.get(`${WEATHER_URL}q=florida&appid=${WEATHER_KEY}`)

	return (dispatch) => {
		request.then((data) => {
			dispatch({
				type: FETCH_POSTS,
				payload: data
			})
		})
	}

}

export const FETCH_WEATHER = 'fetch_posts'

export function fetchWeather() {

	const request = axios.get(`${WEATHER_URL}appid=${WEATHER_KEY}&q=florida`)

	return (dispatch) => {
		request.then((data) => {
			dispatch({
				type: FETCH_WEATHER,
				payload: data
			})
		})
	}

}
