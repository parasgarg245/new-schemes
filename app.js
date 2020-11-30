const express= require('express')
const mongoose =require('mongoose')
const ejs =require('ejs')
const bodyParser = require("body-parser");


const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({
    extended: true
}));


mongoose.connect("mongodb+srv://admin-hospital:hospital123@cluster0.5mlfk.mongodb.net/Api?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const yojnaSchema = mongoose.Schema({
  Title:String,
  Description:String,
  Image:String,
  link:String
    

});
const Yojna_info = mongoose.model("Yojna_info", yojnaSchema);

// const yojna_info1 = new Yojna_info({
//  Title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
//  Description: 'The Pradhan Mantri Fasal Bima Yojana launched on 18 February 2016 by Prime Minister Narendra Modi is an insurance service for farmers for their yields',
//  Image: 'https://www.royalsundaram.in/html/files/crop-insurance/Crop-Insurance-Online.jpg',
//  link: 'https://krishijagran.com/agriculture-world/how-to-apply-update-details-check-beneficiary-status-and-new-list-in-pm-kisan-website/'
// });

// yojna_info1.save();



app.use(express.static("public"));

app.get('/', (req, res) => {
    Yojna_info.find((err, yojna) => {
        if (err)
            console.log(err)
        else
            res.render('scheme',{yojna:yojna})
    })

})







app.listen(3000, () => console.log('server started on port 3000'))