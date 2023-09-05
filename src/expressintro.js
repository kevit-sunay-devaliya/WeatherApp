// commented Belowww......................

const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geoCode = require("./utils/geocode");
const weather = require("./utils/forecast");
const app = express();

const filepath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");
app.use(express.static(filepath));


hbs.registerPartials(partialPath);
app.set("view engine", "hbs");
app.set("views", viewsPath);

app.get("", (req, res) => {
    res.render("index", {
        title: "Weather App",
        name: "Sunay Devaliya"
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Page",
        name: "Sunay Devaliya"
    });
});

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help Page",
        name: "Sunay Devaliya",
        helpText: "This is some useful help text"
    });
});

// app.get("", (req, res) => {
//     res.send("heyy"); 
// });

// app.get("/help", (req, res) => {
//     res.send("helpppp");
// });

// app.get("/about", (req, res) => {
//     res.send("<h1>title</h1>");
// })

app.get("/weather", (req, res) => {
    if (!req.query.address) {
        return res.send({ error: "Please provide Address!" });
    }

    geoCode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error){
            return res.send({error:error});
        }

        weather(latitude,longitude,(error,forecastData)=>{
            if(error){
                return res.send({error});
            }

            res.send({
                forecast:forecastData,
                location:location,
                address:req.query.address
            })
        })

    })
});

// res.send({
//         forecast: 50,
//         location: "rajkot",
//         address: req.query.address
//     });


app.get("/products", (req, res) => {
    // console.log(req.query);
    if (!req.query.search) {
        return res.send({ Error: "Please provide search term" });
    }

    res.send({
        products: []
    })
})
app.get("/help/*", (req, res) => {
    res.render("404", {
        title: 404,
        name: "Sunay Devaliya",
        errorMessage: "No further help pages!"
    })
});

app.get("*", (req, res) => {
    res.render("404", {
        title: 404,
        name: "Sunay Devaliya",
        errorMessage: "Page Not Found!"
    })
});


app.listen(3000, () => {
    console.log("Server is started");
});

















// const path = require("path");
// const express = require("express");
// const hbs = require("hbs");
// const app = express();

// const filepath = path.join(__dirname, "../public");
// const viewsPath = path.join(__dirname, "../templates/views");
// const partialPath = path.join(__dirname, "../templates/partials");
// app.use(express.static(filepath));


// hbs.registerPartials(partialPath);
// app.set("view engine", "hbs");
// app.set("views", viewsPath);

// app.get("", (req, res) => {
//     res.render("index", {
//         title: "Weather App",
//         name: "Sunay Devaliya"
//     });
// });

// app.get("/about", (req, res) => {
//     res.render("about", {
//         title: "About Page",
//         name: "Sunay Devaliya"
//     });
// });

// app.get("/help", (req, res) => {
//     res.render("help", {
//         title: "Help Page",
//         name: "Sunay Devaliya",
//         helpText: "This is some useful help text"
//     });
// });

// app.get("", (req, res) => {
//     res.send("heyy"); 
// });

// app.get("/help", (req, res) => {
//     res.send("helpppp");
// });

// app.get("/about", (req, res) => {
//     res.send("<h1>title</h1>");
// })

// app.get("/weather", (req, res) => {
//     res.send({
//         forecast: 50,
//         location: "rajkot"
//     });
// });

// app.get("/help/*", (req, res) => {
//     res.render("404", {
//         title:404,
//         name:"Sunay Devaliya",
//         errorMessage: "No further help pages!"
//     })
// });

// app.get("*", (req, res) => {
//     res.render("404", {
//         title:404,
//         name:"Sunay Devaliya",
//         errorMessage: "Page Not Found!"
//     })
// });


// app.listen(3000, () => {
//     console.log("Server is started");
// });