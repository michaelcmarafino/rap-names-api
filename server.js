const express = require("express")
const app = express()

const PORT = 8000

const rappers = {
    "21 savage": {
        birthname: "King James",
        birthLocation: "London, England",
        age: 29,
    },
    "chance the rapper": {
        birthname: "Chancelor Bennett",
        birthLocation: "Chicago, Illinois",
        age: 29,
    },
    unknown: {
        birthname: "unknown",
        birthLocation: "unknown",
        age: 0,
    },
}

// looks like an event listener, instead of click its a network request, it then fires this function when it hears this request
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/api/:name", (req, res) => {
    const rapperName = req.params.name.toLowerCase()
    if (rappers[rapperName]) {
        res.json(rappers[rapperName])
    } else {
        res.json(rappers["unknown"])
    }
})

app.listen(PORT || 8000, () => {
    console.log(`Server is running on PORT ${PORT}`)
})
