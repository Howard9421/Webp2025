// 等待頁面加載完成後執行腳本
window.addEventListener('DOMContentLoaded', (event) => {
  
  // 隨機生成字母字串
  function generateRandomString() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const length = Math.floor(Math.random() * 3); // 隨機生成 0, 1, 或 2 個字母
    let randomString = '';
    for (let i = 0; i < length; i++) {
      randomString += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return randomString;
  }

  // 更新 container 顯示的內容
  function updateContainer() {
    const container = document.getElementById('container');
    container.textContent = generateRandomString();
  }

  // 每次按鍵事件時隨機增加 1 到 3 個字元
  function addNewChars() {
    const container = document.getElementById('container');
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const newCharsCount = Math.floor(Math.random() * 3) + 1; // 隨機產生 1 到 3 個字元
    let newChars = '';
    for (let i = 0; i < newCharsCount; i++) {
      newChars += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    container.textContent += newChars;
  }

  // 初始化頁面，顯示隨機字串
  updateContainer();

  // 監聽鍵盤事件
  window.addEventListener("keyup", function(e) {
    console.log(e.key); // 輸出按下的鍵

    const container = document.getElementById('container');
    if (e.key === container.textContent.charAt(0)) {
      // 如果按下的鍵與字串的第一個字母相同，則刪除它
      container.textContent = container.textContent.slice(1);
    }

    // 每次按鍵後隨機新增字母
    addNewChars();
  });

});