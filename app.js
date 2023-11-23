// const http = require('http')

// http.createServer((req, res) => {
// nentuin route
//     res.write('OK')
//     res.end
// }).listen(3001)

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
require('dotenv').config()

app.get('/students', (req, res) => {
    res.json({
        message: 'OK',
        status: 200,
        data: [{
                name: 'Yogie',
                course: 'SE'
            },
            {
                name: 'Zico',
                course: 'DA'
            },
            {
                name: 'Yolen',
                course: 'SE'
            },
            {
                name: 'Mila',
                course: 'DA'
            },
            {
                name: 'Izzah',
                course: 'SE'
            },
            {
                name: 'Linggar',
                course: 'DA'
            }
        ]
    })
})

app.get('/car', (req, res) => {
    res.json({
        status: 200,
        message: 'OK',
        data: [{
                brand: 'Honda',
                type: 'sports',
                price: 10000000000
            },
            {
                brand: 'Mitsubishi',
                type: 'super',
                price: 30000000000000
            },
        ]
    })
})

app.listen(process.env.port, () => {
    console.log(`server is running on port ${process.env.port}`)
})