let btn = document.getElementById('btn');
btn.onclick = function (){ //當點擊按鈕時觸發以下動作
    window.opener=null; // 設置開啟此網頁的原始網頁為 null
    window.open("","_self"); // 開啟空白頁面
    window.close(); // 關閉此網頁
}