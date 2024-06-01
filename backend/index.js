const express = require('express');
const mongoose = require('mongoose');
const resourceRoutes = require('./routes/resources');
const app = express();
const port = 3000;

const uri = 'mongodb+srv://amulyamurahari:Amulya1997@cluster.ynbj1kk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster';
mongoose.connect(uri)
     .then(() => console.log('MongoDB connected'))
     .catch(err => console.log('MongoDB connection error:', err));

app.get('/', (req,res) => {
    res.send('Hello, Amulya!');
} )

app.get('/api/message', (req,res) => {
    res.json({ message: 'Hello from express !'});
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.use(express.json()); //middleware - automatically parses JSON formatted request bodies and makes the parsed data available on req.body.

let resources = [
    {id: 1, name: 'Resource 1' },
    {id: 2, name: 'Resource 2' },
];

app.use('/api/resource', resourceRoutes);

//POST 
app.post('/api/resource', (req,res) => {
    const newResource = req.body;
    resources.push(newResource);
    res.status(201).json(newResource);
})

//GET
app.get('/api/resource/:id', (req,res) => {
    const resourceId = parseInt(req.params.id, 10);
    const resource = resources.find(r => r.id === resourceId);
    if(resource){
        res.json(resource);
    } else {
        res.status(404).json({message: 'Resource not found'});
    }
});

//PUT
app.put('/api/resource/:id', (req,res) => {
    const resourceId = parseInt(req.params.id, 10);
    const resourceIndex = resources.findIndex( r => r.id === resourceId);
    if(resourceIndex != -1)
        {
            resources[resourceIndex] = { ...resources[resourceIndex], ...req.body}
            res.json(resources[resourceIndex]);
        } else {
            res.status(404).json({ message: 'Resource not found'});
        }
    });

//DELETE
app.delete('/api/resource/:id', (req,res) => {
    const resourceId = parseInt(req.params.id, 10);
    const resourceIndex = resources.findIndex( r => r.id === resourceId);
    if(resourceIndex !== -1)
        {
            const deletedResource = resources.splice(resourceIndex, 1);
            res.json(deletedResource[0]);
        } else {
            res.status(404).json({ message: "resource not found"});
        }
});



