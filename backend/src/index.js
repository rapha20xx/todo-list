const express = require("express");

const app = express();

const port = 3001;
 const cors = require ('cors')

const todoRoute = require("../routes/routes")

app.use(express.json())

app.use(cors())


require('../routes/routes')(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});
