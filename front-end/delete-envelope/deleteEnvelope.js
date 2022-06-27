const dateDetail = document.getElementById('date');
const locationDetail = document.getElementById('location');
const item = document.getElementById('itemPurchased');
const priceDetail = document.getElementById('price');


const dateClick = ()=>{
    const text = document.getElementById('input').value;
    if(text.includes('/')){
        var newValue = text.replace(/[/]/g, '')
    } else {
        var newValue = text
    }
    

    fetch(`http://localhost:1700/envelope/delete/date/${newValue}`, {method: 'DELETE'})
    .then((data)=>{
        return data.json();
    })
    .then((data)=>{
        console.log(data);
        let returnValue = document.getElementById('return');
        returnValue.innerHTML = '';
        for(let i of data){
            if(Object.keys(i).length > 0){
                returnValue.innerHTML += `<h1>Item bought in ${i.location}: \n\tYou bought ${i.itemPurchased} on ${i.date} for $${i.price}</h1>\n`
            }
        }
    })
}

dateDetail.addEventListener('click', dateClick);

const locationClick = ()=>{
    const text = document.getElementById('input').value;
    let newValue = text.toLowerCase();

    fetch(`http://localhost:1700/envelope/delete/location/${newValue}`, {method: 'DELETE'})
    .then((data)=>{
        return data.json();
    })
    .then((data)=>{
        console.log(data);
        let returnValue = document.getElementById('return');
        returnValue.innerHTML = ''
        for(let i of data){
            if(Object.keys(i).length > 0){
                returnValue.innerHTML += `<h1>Item bought in ${i.location}: \n\tYou bought ${i.itemPurchased} on ${i.date} for $${i.price}</h1>\n`
            }
        }
    })
}

locationDetail.addEventListener('click', locationClick);

const itemPurchasedClick = ()=>{
    const text = document.getElementById('input').value;
    let newValue = text.toLowerCase();

    fetch(`http://localhost:1700/envelope/delete/itemPurchased/${newValue}`, {method: 'DELETE'})
    .then((data)=>{
        return data.json();
    })
    .then((data)=>{
        console.log(data);
        let returnValue = document.getElementById('return');
        returnValue.innerHTML = ''
        for(let i of data){
            if(Object.keys(i).length > 0){
                returnValue.innerHTML += `<h1>Item bought in ${i.location}: \n\tYou bought ${i.itemPurchased} on ${i.date} for $${i.price}</h1>\n`
            }
        }
    })
}

item.addEventListener('click', itemPurchasedClick);

const priceClick = ()=>{
    const text = document.getElementById('input').value;
    let newValue = Number(text);

    fetch(`http://localhost:1700/envelope/delete/price/${newValue}`, {method: 'DELETE'})
    .then((data)=>{
        return data.json();
    })
    .then((data)=>{
        console.log(data);
        let returnValue = document.getElementById('return');
        returnValue.innerHTML = '';
        for(let i of data){
            if(Object.keys(i).length > 0){
                returnValue.innerHTML += `<h1>Item bought in ${i.location}: \n\tYou bought ${i.itemPurchased} on ${i.date} for $${i.price}</h1>\n`
            }
        }
    })
}

priceDetail.addEventListener('click', priceClick);