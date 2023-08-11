const express = require("express");
const app = express();
app.get("/", (req, res)=>{
  res.setHeader("content-type","text/html;charset=utf-8");
  res.end("主頁");
});
app.get("/p/:id/", (req, res)=>{
    res.setHeader("content-type", "text/html;charset=utf-8");
    let id = req.params.id;
    let pageName = "IG";
    if(id === "CvZP-PIguWG"){
        pageName = "《浅草で一番おすすめしたい抹茶クレープ》"
    }else if(id === CvRz0e3Awmi){
        pageName = "《ぷるんぷるんすぎるマシュマロアイス》"
    }
    res.end(pageName)
})

app.listen(3000, ()=>{
  console.log("服務以啟動於 http://localhost:3000");
});

// 這個變動的路徑就是取用內容的主 KEY，可以把它叫做 id
// http://localhost:3000/p/id/