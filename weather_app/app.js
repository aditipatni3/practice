const { log } = require("console");
const express= require("express");
const https=require("https")
const bodyParser=require("body-parser")

const app=express();
app.use(bodyParser.urlencoded({extended:true}))


app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html")

app.post("/", function(req,res){

        const query=req.body.cityName
        const apikey="ac806b5d6f629ec31b83f08092826078"
        const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units=metric"
    
        https.get(url, function(response){
        console.log(response.statusCode)
    
        response.on("data", function(data){
        const weatherData=JSON.parse(data)
        const temp= weatherData.main.temp
        console.log(temp)
        const weatherDescription= weatherData.weather[0].description
        console.log(weatherDescription)
        res.write("<h1>The temperature in " +query+" is "+temp+" degree celsius with "+ weatherDescription+"</h1>")
        const icon=weatherData.weather[0].icon;
        const imageUrl="https://openweathermap.org/img/wn/"+icon+"@2x.png"
        res.write("<img src="+imageUrl+">")
    })
        })
})
})



app.listen(3000, function(){
    console.log("server is running on port 3000")
})