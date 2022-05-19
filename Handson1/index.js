//common js module , importing the http module
const http=require("http")
const port=3000

const server=http.createServer((req,res)=>{
    const data={
        Class_Name:"Prepbyte",
        Batch:"EA-8 December",
        Current_Language:"Node JS/Express JS"
    }
    res.write("<h1>What is node</h1>")
    res.write("<p>Node.js is an open-source, cross-platform JavaScript runtime environment with a focus on server-side and networking applications.</p>")
    res.write("<p>Node.js built on Chrome's V8 JavaScript engine that executes JavaScript code outside a web browser</p>")
    res.write("<p>Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)</p>")
    res.write("<p>Node.js uses asynchronous programming!</p>")
    res.write("<p>Node.js can generate dynamic page content</p>")
    res.write("<p>Node.js can create, open, read, write, delete, and close files on the server</p>")
    res.write("<p>Node.js can collect form data and can add, delete, modify data in your database</p>")
    res.write("<h3><b>Create a simple server using http request</b></h3>")
    res.write("<p>const http = require('http');<br><br>http.createServer(function(request, response){<br>response.write(“Hello World”);<br>response.end();<br>}).listen(3000)</p>")
    res.write("<hr/>")
    res.write("<h2>Json Response</h2>")
    res.write(JSON.stringify(data));

})

        // <ul>
        //     <li></li>
        //     <li></li>
        //     <li></li>
        // </ul>

server.listen(port,()=>{
    console.log(`Node JS code run at port ${port}`)
})