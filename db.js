const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./ws.db')

db.serialize(function(){

    //Criar a tabela

    db.run(`CREATE TABLE IF NOT EXISTS ideas(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        title TEXT,
        category TEXT,
        description TEXT,
        link TEXT

    );
`) 

    //Inserir dados na tabela
    const query = `
    INSERT INTO ideas
    image,
    title,
    category,
    description,
    link
    ) VALUES (?,?,?,?,?);`


     const values = [
    "https//:image.flaticon.com/icons/svg/2729/2729032.svg",
    "Karaoke",
    "Diversão em Familía",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    "https:github.com/lumamontes"
]
    // db.run(query, values, function(err) {
    //     if (err) return console.log (err)

    //     console.log(this)
    // })
    
   
    // Consultar dados na tabela

    //Deletar um dado na tabela 

})


module.exports = db 


