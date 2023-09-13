import axios from 'axios'

export const http = axios.create({
        baseURL: 'http://localhost:8000/lavajato',

        // headers: {
        //     Authorization: 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0NjU0NTQ4LCJpYXQiOjE2OTQ2MjU3NDgsImp0aSI6IjFmMDMzYzJiZWMwMzQ3ZWFhY2ZmNTRjMzA5ZWVhYjY5IiwidXNlcl9pZCI6MX0.dgkJHG6C0D4UEXwVOmb-uIflppAod8Kw7V1YttVJfBU'
        //   }      
        

})