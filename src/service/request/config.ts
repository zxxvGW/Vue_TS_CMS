let BASE_URL = ''
let TIME_OUT = 5000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
  TIME_OUT = 3000
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://123.207.32.32:8000/home/multidata'
} else {
  BASE_URL = 'http://123.207.32.32:8000/home/multidata'
}
export { BASE_URL, TIME_OUT }
