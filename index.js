


const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send(' Hello , DevOps!\n  Docker is awesome!');

});


app.listen(8080, () => {
    console.log('server is running on port 8080')
});
