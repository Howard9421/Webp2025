var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
var xhr = new XMLHttpRequest();
xhr.open('GET', openUrl, true);
xhr.send();

xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var dataset = JSON.parse(this.responseText);
    addNewData(dataset);
  }
};

function addNewData(dataset) {
  var mytable = document.getElementById("csie");  // 修正了這裡的拼寫錯誤，應該是 getElementById 而非 getElementByld
  dataset.forEach(function(data, index) {
    var row = mytable.insertRow(-1);
    row.insertCell(0).innerHTML = data['title'];  // 修正了 innerHTML 的拼寫錯誤
    row.insertCell(1).innerHTML = data['showInfo'][0]['location'];
    row.insertCell(2).innerHTML = data['showInfo'][0]['price'];
  });