const express = require('express');
const app = express();
const port = 3000;

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
    {id: 1, name: 'Resouce 1' },
    {id: 2, name: 'Resouce 2' },
];

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



