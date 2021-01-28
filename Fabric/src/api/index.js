import axios from 'axios'
import { Message } from 'element-ui'

const serverIP = '123.57.212.30:8088/mooa/v1'
// const serverIP = 'www.fastmock.site/mock/8c584268249c40df9e79c583dd6716e7'
const serverIP = '192.168.1.92:8080/mooa/v1'
const http = axios.create({
    baseURL: `http://${serverIP}`,
    // timeout: 5000
})

http.interceptors.response.use(
    res => {
        return res
    },
    err => {
        Message({
            message: '服务器繁忙，请稍后再试',
            type: 'error'
        })
        return Promise.reject(err)
    }
)

export {
    http
}
