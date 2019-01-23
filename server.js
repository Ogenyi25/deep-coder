const express = require('express')

const path = require("path")
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()


const PORT = 5000

let UserArray = []

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, "./public")));

app.set("views" , path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render("index", {
        pageTitle: "Home"
    })
    
})

app.get('/login', (req, res) => {
    res.render("login", {
        pageTitle: "Login"
    })
})

app.get('/signup', (req, res) => {
    res.render("signup", {
        pageTitle: "Signup"
    })
})
app.post('/signup', (req, res) => {
let userObject = req.body
UserArray.push(userObject)
console.log(UserArray)
res.redirect('/')
})
app.listen(PORT, function(){
    console.log("server is now running")
})