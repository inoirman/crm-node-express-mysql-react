const express = require('express')
const cors = require('cors')

const db = require('./models')

const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

db.sequelize.sync({force: false})
    .then(() => {
        console.log('Database synced successfully')
    })
    .catch(err => {
        console.log( err.message )
    })

app.get('/', (req,res) => {
    res.send('<h1>Welcome to CRM Server</h1>')
})

require('./routes/auth.routes')(app)
require('./routes/user.routes')(app)

app.listen(PORT, () => {
    console.log( `CRM Server is running on port=${PORT}` )
})