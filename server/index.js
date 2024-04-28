require('dotenv').config()

const express = require('express');
const sequelize = require('./db');
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const path = require('path')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const bodyParser = require('body-parser');

// IT IS PORT
const PORT = process.env.PORT || 5001;

const app = express();

app.use(cors())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use(bodyParser.json({ limit: "10mb" }));

// Установка middleware для разбора данных формы
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', router)

//Оброботка ошибок, последний Middleware
app.use(errorHandler)

app.get('/', (req, res) => {
    res.status(200).json({message: 'WORKING!!!'})
})


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()

        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e)

    }
}

start()
