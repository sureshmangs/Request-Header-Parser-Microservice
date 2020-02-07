const express = require('express')
const dns = require('dns')
const navigator = global.navigator

const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.get('/api/whoami', (req, res) => {
    let head = req.headers;

    let myData = {
        "ipadress": dns.getServers().toString(),
        "language": head['accept-language'],
        "software": head['user-agent']
    }

    res.json(myData);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App runnung at port ${PORT}`)
});
