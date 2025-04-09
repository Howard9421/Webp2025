window.onload = function() {
    const container = document.querySelector('.container');
    const textDisplay = document.getElementById('text-display');
    const inputField = document.getElementById('input-field');
    let currentString = generateRandomString(0, 2); // 初始隨機字串長度 0 到 2
    let incorrectAttempts = 0;

    // 顯示隨機產生的字串
    textDisplay.textContent = currentString;

    // 監聽 keyup 事件
    inputField.addEventListener('keyup', function(event) {
        const inputValue = inputField.value;

        // 檢查輸入的字元與字串的首字元是否相符
        if (inputValue === currentString.substring(0, inputValue.length)) {
            // 刪除已經匹配的字元
            currentString = currentString.slice(inputValue.length);
            inputField.value = ''; // 清空輸入框

            // 如果字串被完全匹配，則生成新的隨機字串
            if (currentString.length === 0) {
                currentString = generateRandomString(0, 2);
                textDisplay.textContent = currentString;
            } else {
                textDisplay.textContent = currentString;
            }
        } else {
            // 如果錯誤次數達到 3 次，增加額外的隨機字串
            incorrectAttempts++;
            if (incorrectAttempts >= 3) {
                currentString += generateRandomString(6, 6);
                incorrectAttempts = 0; // 重置錯誤計數
                textDisplay.textContent = currentString;
            }
        }

        // 每次 keyup 都隨機增加 1 到 3 個字元
        currentString += generateRandomString(1, 3);
        textDisplay.textContent = currentString;
    });

    // 隨機生成字串
    function generateRandomString(minLength = 1, maxLength = 3) {
        const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
        let result = '';
        for (let i = 0; i < length; i++) {
            const char = String.fromCharCode(97 + Math.floor(Math.random() * 26)); // a-z
            result += char;
        }
        return result;
    }
};