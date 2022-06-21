const express = require('express');
const app = express();
const PORT = process.env.PORT || 3800;

//app.use(express.json())
app.use(express.urlencoded({extended: false}));

let data = [
    {
        date: '4/13/2015',
        location: 'Market',
        itemPurchased: 'Apples',
        price: '$28'
    },
    {
        date: '3/12/2015',
        location: 'Target',
        itemPurchased: 'clothes',
        price: '$90'
    }
];

app.get('/', (req, res, next)=>{
    res.send(`Listening To Port number ${PORT}`);
})

//get all envelopes
app.get('/envelopes', (req, res, next)=>{
    res.send(data)
})

//get specific envelope

app.get('/envelope/date/:date', (req, res, next)=>{
    for(let item of data){
        let newDate = item.date.replace(/[/]/g, '')
            console.log(newDate)
        if(newDate == req.params.date.toString()){
            res.send(item)
        }
    }
})

app.get('/envelope/location/:location', (req, res, next)=>{

    for(let item of data){
        if(item.location == req.params.location){
            res.send(item)
        }
    }
})

app.get('/envelope/itemPurchased/:itemPurchased', (req, res, next)=>{
    for(let item of data){
        if(item.itemPurchased == req.params.itemPurchased){
            res.send(item);
        }
    }
})

app.get('/envelope/price/:price', (req, res, next)=>{
    for(let item of data){
        if(item.price == req.params.price){
            res.send(item);
        }
    }
})

//post envelope
app.post('/', (req, res, next)=>{
    data.push(req.body);
    res.status(200).send(data)
    
    })

//update envelope
app.put('/envelope/update/:detailThing/:detail/:newAmount', (req, res, next)=>{
    for(let item of data){
        if(item[req.params.detailThing] == req.params.detail){
            item[req.params.detailThing] = req.params.newAmount;
            res.send(item)
        }
    }
   
})

//detelets envelope
app.delete('/envelope/delete/:detailThing/:detail', (req, res, next)=>{
    for(let item in data){
        if(item[req.params.detailThing] == req.params.detail){
            console.log(data.indexOf(item))
            data.splice(data.indexOf(item), 1);
            res.send(data);
        }
    }
})


app.listen(PORT);