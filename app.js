const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use('/imgs', express.static(__dirname + '/imgs'));


// sendFile will go here
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '/contacts.html'));
});
app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, '/services.html'))
})
app.get('/css/style.css',(req,res)=>{
    res.sendFile(__dirname + '/css/style.css')
})

function horsServices(req,res,next){
const date=new Date()
if(date.getDay()===0||date.getDay()===6||date.getHours()<9||date.getHours()>16) {
     res.sendFile(__dirname, '/notFound.html')
 } else
  next()
}
app.use(horsServices)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})