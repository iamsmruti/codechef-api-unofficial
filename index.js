import express from 'express'
import cors from 'cors'
import codechefRoutes from './routes/codechefRoutes.js'

const app = express()
app.use(cors())

app.use('/codechef', codechefRoutes)

const PORT = 4545
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})