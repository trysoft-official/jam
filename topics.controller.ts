const sqlite3 = require('sqlite3')
const { Request, Response } = require('express')


const db = new sqlite3.Database('./data.db', err => {
    if (err) return console.log(err.message)
    console.log('Successful connection to database')
})

interface Topics {
    async () => {
        
    }
}