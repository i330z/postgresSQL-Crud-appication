var express = require('express');
const studentRoutes = require('./src/student/routes');
var app = express();

app.use(express.json());

app.get('/', function (req, res) {
   res.send('Hello World');
})


app.use("/api/v1/students", studentRoutes);

app.listen(8081, () => console.log('Server is running'))