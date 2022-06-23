const box = document.getElementById('container')
const amount = document.getElementById('total')

 fetch('http://localhost:1700/envelopes')
    .then((data)=>{
        return data.json();
    })
    .then((data)=>{
        console.log(data)
        let total = 0;
        for(let i of data){
           box.innerHTML +=  `<h1>Item bought in ${i.location}: \n You bought ${i.itemPurchased} on ${i.date} for $${i.price}</h1>` + "\n";
           total +=Number(i.price);
             
        }
        amount.innerHTML = `You spent a total of $${total}`;

    })

 