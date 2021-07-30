let {createServer}  = require('./src/infraestructure/server/server')
let connectDB = require('./src/infraestructure/db/mongodb')


const start = async () => {
    try {
        await connectDB()
        await createServer()
    }catch (err) {
        console.log(err)
        process.exit(1);
    }
}

start()