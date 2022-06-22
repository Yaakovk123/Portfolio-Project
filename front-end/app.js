fetch('http://localhost:1400/envelopes')
    .then((data)=>{
        console.log('hello')
        return data.json();
    })
    .then((data)=>{
        console.log('hello')
        console.log(data)
    })