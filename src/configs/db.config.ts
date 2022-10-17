import {Pool} from 'pg'

const pool: Pool = new Pool({
    user : process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST
})

export default pool;