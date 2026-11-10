import 'dotenv/config'
import fs from 'node:fs'
import db from './connect.js'

const sql = fs.readFileSync('./db/albums.sql').toString()

db.query(sql)
.then(data => {
    db.end()
    console.log('Setup complete.')
})
.catch(error => console.log(error))