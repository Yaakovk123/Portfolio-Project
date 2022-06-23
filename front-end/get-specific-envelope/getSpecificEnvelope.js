const dateDetail = document.getElementById('date');
const locationDetail = document.getElementById('location');
const item = document.getElementById('item');
const price = document.getElementById('price');
const input = document.getElementById('input');


const clickDate = ()=>{
    let value = input.value.replace(/[/]/g, '')
    fetch(`http://localhost:1700/envelope/date/${value}`)
    .then((data)=>{
        return data.json();
    })
    .then((data)=>{
        let final = document.getElementById('return')
        final.innerHTML = `<h1>Item bought in ${data.location}: \n\tYou bought ${data.itemPurchased} on ${data.date} for $${data.price}</h1>\n`
    })
    
}
dateDetail.addEventListener('click', clickDate)

const clickLocation = ()=>{
    let value = input.value.toLowerCase();
    console.log(value)
    fetch(`http://localhost:1700/envelope/location/${value}`)
        .then((data=>{
            return data.json()
        }))
        .then((data)=>{
            let final = document.getElementById('return')
            final.innerHTML = `<h1>Item bought in ${data.location}: \n\tYou bought ${data.itemPurchased} on ${data.date} for $${data.price}</h1>\n`
        })
}
locationDetail.addEventListener('click', clickLocation)

const clickItem = ()=>{
    let value = input.value.toLowerCase();
    fetch(`http://localhost:1700/envelope/itemPurchased/${value}`)
        .then((data)=>{
            return data.json();
        })
        .then((data)=>{
            let final = document.getElementById('return');
            final.innerHTML = `<h1>Item bought in ${data.location}: \n\tYou bought ${data.itemPurchased} on ${data.date} for $${data.price}</h1>\n`
        })
}
item.addEventListener('click', clickItem);

const clickPrice = ()=>{
    fetch(`http://localhost:1700/envelope/price/${input.value}`)
        .then((data)=>{
            return data.json();
        })
        .then((data)=>{
            let final = document.getElementById('return');
            final.innerHTML = `<h1>Item bought in ${data.location}: \n\tYou bought ${data.itemPurchased} on ${data.date} for $${data.price}</h1>\n`
        })
}
price.addEventListener('click', clickPrice)