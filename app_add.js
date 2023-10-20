const http=require('http');
http.createServer((req, res)=>{
    res.write("Rene");
    res.end();
})
.listen(8080);
console.log('Escuchandom el puerto', 8080);