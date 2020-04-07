//npm init -y > npm start > npm i express > npm i nodemon
//Usei o express para criar e configurar meu servidor

const express = require("express")
const server = express()

const db = require("./db")

// const ideas = [
//   {
//     img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
//     title: "Cursos de Programação",
//     category: "Estudo",
//     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
//     url: "https:github.com/lumamontes"
//   },
//   {
//     img: "https//:image.flaticon.com/icons/svg/2729/2729005.svg",
//     title: "Exercícios",
//     category: "Saúde",
//     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
//     url: "https:github.com/lumamontes"
//   },
//   {
//     img: "https//:image.flaticon.com/icons/svg/2729/2729027.svg",
//     title: "Meditação",
//     category: "Saúde",
//     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
//     url: "https:github.com/lumamontes"
//   },
//   {
//     img: "https//:image.flaticon.com/icons/svg/2729/2729032.svg",
//     title: "Karaoke",
//     category: "Diversão em Familía",
//     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
//     url: "https:github.com/lumamontes"
//   },
// ]
// configurar arquivos estáticos (css, scrips, imagens)
server.use(express.static("public"))


//configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
  express: server,
  noCache: true, //boolean 
}

)



//criei uma rota /
// e capturo o pedido do cleinte para responder

// server.get("/", function (req, res) {

//   db.all(`SELECT * FROM ideas`, function (err, rows) {
//     if (err) {
//       console.log(err)
//       return res.send("Erro no banco de dados!")
//     }

//     const reversedIdeas = [...rows].reverse()

//     let lastIdeas = []
//     for (let idea of reversedIdeas) {
//       if (lastIdeas.length < 2) {
//         lastIdeas.push(idea)
//       }
//     }

//     return res.render("index.html", { ideas: lastIdeas })
//   })

// })


// server.get("/ideias", function (req, res) {
//   db.all(`SELECT * FROM ideas`, function (err, rows) {
//     if (err) {
//       console.log(err)
//       return res.send("Erro no banco de dados!")
//     }

//     const reversedIdeas = [...rows].reverse()

//     return res.render("ideias.html", { ideas: reversedIdeas })


//   })

// })


//liguei meu servidor na porta 3001
server.listen(3001) 
