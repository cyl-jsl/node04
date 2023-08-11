const express = require("express");
const path = require("path")
const app = express();

app.use(express.static(path.join(__dirname, "nodee04hw01")))
let html = `<a href="/p/808941">
<img src="/node04hw01/808941.jpg" alt="" width="100">
</a>
<a href="http://localhost:3000/p/1126359">
<img src="/node04hw01/1126359.jpg" alt="" width="100">
</a>
<a href="http://localhost:3000/p/2280545">
<img src="/node04hw01/2280545.jpg" alt="" width="100">
</a>
<a href="http://localhost:3000/p/2333857">
<img src="/node04hw01/2333857.jpg" alt="" width="100">
</a>
<a href="http://localhost:3000/p/2693447">
<img src="/node04hw01/2693447.jpg" alt="" width="100">
</a>`


app.get("/", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end(html);
});
app.get("/p/:id/", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    let id = req.params.id;
    let pageName = html;
    if (id === "808941") {
        pageName = `<img src="/node04hw01/808941.jpg" alt="">`
    } else if (id === "1126359") {
        pageName = `<img src="/node04hw01/1126359.jpg" alt="">`
    } else if (id === "2280545") {
        pageName = `<img src="/node04hw01/2280545.jpg" alt="">`
    } else if (id === "2333857") {
        pageName = `<img src="/node04hw01/2333857.jpg" alt="">`
    } else if (id === "2693447") {
        pageName = `<img src="/node04hw01/2693447.jpg" alt="">`
    }
        res.end(pageName)
    
})

app.listen(3000, () => {
    console.log("服務以啟動於 http://localhost:3000");
});