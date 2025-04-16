let allData = [
  { name: "科博館「古代人說故事」", location: "臺中市西區" },
  { name: "曾侯乙編鐘「重返」", location: "臺中市北區" },
  { name: "國美4.0建築模型文件", location: "臺中市西區" },
  { name: "臺灣工藝百年進行式", location: "南投縣草屯鎮" },
  { name: "傳藝動物園 展", location: "宜蘭縣五結鄉" },
  { name: "臺灣生態的多樣性（線上活動）", location: "臺南市新營區" },
  { name: "南島新社：印尼（線上活動）", location: "臺南市新營區" },
  { name: "文化復振：西拉雅‧馬卡道", location: "臺南市新營區" },
  { name: "結果：原住民對癌症的方式", location: "臺南市新營區" },
  { name: "小農市集週末限定", location: "高雄市苓雅區" },
  { name: "臺灣工藝設計展", location: "新竹市東區" },
  { name: "陶藝的多重宇宙", location: "臺北市中正區" }
];

let filteredData = [...allData];
let currentPage = 1;
const pageSize = 10;

function renderTable() {
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const pageData = filteredData.slice(start, end);
  const tbody = document.getElementById("dataTable");
  tbody.innerHTML = "";

  pageData.forEach(item => {
    tbody.innerHTML += `<tr><td>${item.name}</td><td>${item.location}</td></tr>`;
  });

  const totalPages = Math.ceil(filteredData.length / pageSize) || 1;
  document.getElementById("pageInfo").innerText = `第 ${currentPage} 頁 / 共 ${totalPages} 頁`;

  document.querySelector("button[onclick='prevPage()']").disabled = currentPage === 1;
  document.querySelector("button[onclick='nextPage()']").disabled = currentPage >= totalPages;
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
}

function nextPage() {
  const totalPages = Math.ceil(filteredData.length / pageSize);
  if (currentPage < totalPages) {
    currentPage++;
    renderTable();
  }
}

function searchData() {
  const keyword = document.getElementById("searchInput").value.trim().toLowerCase();
  filteredData = allData.filter(item =>
    item.name.toLowerCase().includes(keyword)
  );
  currentPage = 1;
  renderTable();
}

renderTable();
