const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("網站主頁");
});
app.get("/home", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("網站下的 home 的內容");
});
app.post("/login", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("進入登入流程");
});
app.all("/test", (req, res) => {
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.end("符合所有方法");
});
app.all("*", (req, res)=>{
    res.setHeader("content-type","text/html;charset=utf-8");
    res.end("<h1>404 - 找不到內容</h1>");
  });
app.listen(3000, () => {
    console.log("服務以啟動於 http://localhost:3000");
});
// 建立 express02，初始化專案，安裝 express，建立主程式 index.js
// 其實在 express01 就已經開始路由，那時候寫了兩個
// / 這個路徑是指當瀏覽器拜訪網站時，網址上沒有任何路徑字串時的路徑
// 這時再多加一個 setHeader，設定 content-type 來顯示中文內容
// 另一個路由是 /home，回傳內容也改成中文顯示
// 這兩個路由都是由 get 方法來網頁拜訪時所觸發，也就是正常輸入網址或正常的超連結連結進入


// 必需建立一個 form.html 檔，寫一個表單元素，其中放一個按鈕元素來送出，這樣才能測試 /login 那個路由
// 表單中的 action 指向 app 啟用的伺服器網址，再加上路徑 /login
// 表中的方法要寫 post
// 最後用 live server 啟動這一個 form.html，並按送出測試，看看是不是有看到「進入登入流程」的字
// 這裡的流程在 http 模組使用的章節中都有經歷過
// 只不過那時我們是寫很麻煩的 if else 去判斷
// 這邊是用封裝起來一個一個去比對
// 當然，目前感覺起來現在的寫法會比 http 模組時的寫法輕鬆快樂很多

// 再寫一個路由，這次是用 all 這個方法，表示不論使用 get post 任何方法都能觸發
// 路由的路徑用 /test，回應的內容寫「符合所有方法」
// 試試看直接輸入網址進入，看看是不是有出現字串「符合所有方法」
// 也試看看將 form.html 中的網址改到這個 /test 路徑下，看看是不是有出現字串「符合所有方法」
