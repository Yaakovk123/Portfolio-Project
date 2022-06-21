const express = require('express');
const app = express();
const PORT = process.env.PORT || 1800;

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

//get specific envelope by date
app.get('/envelope/date/:date', (req, res, next)=>{
    for(let item of data){
        let newDate = item.date.replace(/[/]/g, '')
            console.log(newDate)
        if(newDate == req.params.date.toString()){
            res.send(item)
        }
    }
})

//get envelobe by location
app.get('/envelope/location/:location', (req, res, next)=>{

    for(let item of data){
        if(item.location == req.params.location){
            res.send(item)
        }
    }
})

//get envelope by itemPurchased
app.get('/envelope/itemPurchased/:itemPurchased', (req, res, next)=>{
    for(let item of data){
        if(item.itemPurchased == req.params.itemPurchased){
            res.send(item);
        }
    }
})

//get envelope by price
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
            console.log(item[req.params.detailThing])
        if(item[req.params.detailThing] == req.params.detail){
            item[req.params.detailThing] = req.params.newAmount;
            res.send(item)
        }
    }
   
})

//deletes envelope by date
app.delete('/envelope/delete/date/:detail', (req, res, next)=>{
    let index = data.findIndex(item =>{
        let newIndex = data.indexOf(item);
        let newDate = data[newIndex].date.replace(/[/]/g, '')
        if(newDate == req.params.detail){
            return item
        }
    })
    data.splice(index, 1)
    res.send(data);
})

//deletes envelope by location
app.delete('/envelope/delete/location/:detail', (req, res, next)=>{
    let index = data.findIndex(item =>{
        let newIndex = data.indexOf(item);
        if(data[newIndex].location == req.params.detail){
            return item
        }
    })
    data.splice(index, 1)
    res.send(data);
})

//delete envelope by itemPurchased
app.delete('/envelope/delete/itemPurchased/:detail', (req, res, next)=>{
    let index = data.findIndex(item =>{
        let newIndex = data.indexOf(item);
        if(data[newIndex].itemPurchased == req.params.detail){
            return item
        }
    })
    data.splice(index, 1)
    res.send(data);
})

//delete envelope by price
app.delete('/envelope/delete/price/:detail', (req, res, next)=>{
    let index = data.findIndex(item =>{
        let newIndex = data.indexOf(item);
        if(data[newIndex].price == req.params.detail){
            return item
        }
    })
    data.splice(index, 1)
    res.send(data);
})


app.listen(PORT);