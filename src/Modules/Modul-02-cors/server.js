import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors({
    // origin: 'http://localhost:3000',
    // optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

app.get('/books', (req, res) => {
    res.json([
        { title: 'Harry Potter' },
        { title: 'Chronicles of Narnia' },
        { title: 'The Lord of the Rings' }
    ]);
});
app.listen(8080, () => {
console.log('====================================');
console.log("Server started on port 8080");
console.log('====================================');
})
