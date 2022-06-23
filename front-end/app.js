fetch('http://localhost:1700/envelopes')
    .then((data)=>{
        return data.json();
    })
    .then((data)=>{
        console.log(data)
    })