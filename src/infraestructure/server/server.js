const express =require('express')

const createServer = async () => {
    const PORT = process.env.PORT || 4000
    const app = express()
    app.use(express.json())

    app.use('/api',require('./routes/PublicationRoutes'))
    app.listen(PORT, () => {console.log('Server listening on port 4000')})
}

module.exports =  {createServer} 