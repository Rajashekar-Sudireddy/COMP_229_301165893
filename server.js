const connect=require('connect');
const { resolveSoa } = require('dns');
var http=require('http');

var app=connect();

function helloWorld(req,res,next)
{

    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');

}

function byeWorld(req,res,next)
{

    res.setHeader('Content-Type','text/plain');
    res.end('Bye World');

}

app.use('/hello',helloWorld);
app.use('/bye',byeWorld);

app.listen(3000);