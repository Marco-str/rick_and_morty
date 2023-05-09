const http = require ('http');

const characters = require('./src/utils/data.js');



http.createServer((req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    
        if(req.url.includes("rickandmorty/character")){
            // console.log(req.url.split("/").at(-1))
            let id= req.url.split("/").at(-1)

            let characterFilter = characters.filter((char)=> char.id === Number(id))// Filter me devielve un ARRAY con los elementos que cumplan la condicion
            //let characterFilter = characters.find((char)=> char.id === Number(id))// Find me devielve un OBJETO ,el primer elemento que cumpla la condicion
            // console.log(characterFilter)
            
            res.writeHead(200, {'Content-Type': 'application/json'})
            .end(JSON.stringify(characterFilter))
        }

    
}).listen(3001, "localhost")


//http://localhost:3001/rickandmorty/character/1