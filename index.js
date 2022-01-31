const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const encryptor = require('@roof-cat/insalt-encryptor')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.post('/encryptor', (req, res)=> {
	res.json({password: encryptor(req.body)})
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log('Listening on port', port))