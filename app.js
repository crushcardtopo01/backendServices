const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;
const bodyParser = require('body-parser');

app.use(express.static('public'))

// app.get('*', (req, res) => {
//     res.redirect('/');
// });

app.get('/dummyResponse', (req, res) => {
    let dumyRes = [{"project":"name1","date":"02/02/2023"},{"project":"name2","date":"02/02/2023"},{"project":"name3","date":"02/02/2023"},{"project":"name3","date":"02/02/2023"},{"project":"name3","date":"02/02/2023"}]
    res.json({ message: dumyRes });
  });

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})