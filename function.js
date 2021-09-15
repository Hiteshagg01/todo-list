const express = require("express");

const app = express();
const portNumber = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("pub"));
app.set('view engine', 'ejs');

const items = [];

app.get('/', (req, res) => {

    console.log(req.complete);

    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'short'
    };
    let today = new Date();
    let day = today.toLocaleDateString("en-US", options);

    res.render('list', {
        DAY: day,
        NEWITEMS: items
    });
});

app.post("/", (req, res) => {

    items.push(req.body.item);
    res.redirect('/');

});

app.listen(portNumber, () => {
    console.clear();
    console.log(`\n# Server is online on > ${portNumber} <`);
});