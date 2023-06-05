const express = require("express");
const app = express();
app.use(express.json());

let pessoas = [ "Leticia", "Silva"];

app.get("/dados", (req, res) => {
    res.send("Leticia");
});
app.get("/meusdados", (req, res) => {
    return res.json(pessoas);
}); 
app.post("/cadastrar", (req, res)=> {
     var {nome}= req.body;
    pessoas.push(nome);
    res.send("Cadastro feito com sucesso!")
});
app.delete("/delete/:id", (req, res) => {
    var { id } = req.params
    pessoas.splice(id, 1);
    return res.json ({message: "Deletado"})
});

app.put("/pessoas/:id", (req, res)=>{
    const { id } = req.params;
    const { nome } = req.body;
    pessoas [ id ] = nome;
    return res.json(pessoas);
});

app.listen(8080, () => {console.log("run"); })