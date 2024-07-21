import sqlite, { Database } from "sqlite3"

const db: Database = new sqlite3.Database('./data.db', err => {
    if (err) return console.log(err.message)
    console.log('Successful connection to database')
})

interface MessagesI {
    send: void
    get: void
}

class Messages extends MessagesI {
}