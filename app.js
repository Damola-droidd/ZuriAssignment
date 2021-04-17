const http= require('http')
const path= require('path')
const  fs = require('fs')
const fetch = require('node-fetch');



//create server &&   // fetch data from jSON placeholder
const server = http.createServer (function(req,res){
    fetch('http://jsonplaceholder.typicode.com/posts', {
        body: JSON.stringify(),
      header: { 'Content-Type': ('application/json' )}
    })
    .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))
})

// createport
const port=3000

server.listen(3000,'localhost');

console.log("server is listenning on port 3000")





