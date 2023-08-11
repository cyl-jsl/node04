const express = require("express");
const app = express();

app.get("/request", (req, res)=>{
    res.setHeader('content-type', 'text/html;charset=utf-8');
    res.end("要求訊息的內容")
    console.log(req.method) // GET
    console.log(req.url) // /request
    console.log(req.httpVersion); // 1.1
    console.log(req.headers);  //物件
    // {
    //     host: 'localhost:3000',
    //     connection: 'keep-alive',
    //     'cache-control': 'max-age=0',
    //     'sec-ch-ua': '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
    //     'sec-ch-ua-mobile': '?0',
    //     'sec-ch-ua-platform': '"Windows"',
    //     'upgrade-insecure-requests': '1',
    //     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    //     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    //     'sec-fetch-site': 'none',
    //     'sec-fetch-mode': 'navigate',
    //     'sec-fetch-user': '?1',
    //     'sec-fetch-dest': 'document',
    //     'accept-encoding': 'gzip, deflate, br',
    //     'accept-language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7'
    //   }
    console.log(req.path); // /request
    console.log(req.query); // {}
    console.log(req.ip); // ::1
    console.log(req.get())
    
});

app.listen(3000, ()=>{
    console.log("on: http://localhost:3000/request")
})