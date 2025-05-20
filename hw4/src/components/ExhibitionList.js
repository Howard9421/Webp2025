// ExhibitionList.js
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, Button, Container, Typography } from "@mui/material";

const columns = [
  { field: "name", headerName: "名稱", width: 300 },
  { field: "location", headerName: "地點", width: 200 }
];

const pageSizeOptions = [5, 10];

export default function ExhibitionList() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { id: 1, name: "科博館「古代人說故事」", location: "臺中市西區" },
        { id: 2, name: "曾侯乙編鐘「重返」", location: "臺中市北區" },
        { id: 3, name: "國美4.0建築模型文件", location: "臺中市西區" },
        { id: 4, name: "臺灣工藝百年進行式", location: "南投縣草屯鎮" },
        { id: 5, name: "傳藝動物園 展", location: "宜蘭縣五結鄉" },
        { id: 6, name: "臺灣生態的多樣性（線上活動）", location: "臺南市新營區" },
        { id: 7, name: "南島新社：印尼（線上活動）", location: "臺南市新營區" },
        { id: 8, name: "文化復振：西拉雅‧馬卡道", location: "臺南市新營區" },
        { id: 9, name: "結果：原住民對癌症的方式", location: "臺南市新營區" },
        { id: 10, name: "小農市集週末限定", location: "高雄市苓雅區" },
        { id: 11, name: "臺灣工藝設計展", location: "新竹市東區" },
        { id: 12, name: "陶藝的多重宇宙", location: "臺北市中正區" }
      ];
      setAllData(data);
      setFilteredData(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = allData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, allData]);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        🎯 景點觀光展覽資訊
      </Typography>

      <TextField
        label="🔍 搜尋名稱關鍵字"
        variant="outlined"
        fullWidth
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="例如：臺灣"
        sx={{ mb: 2 }}
      />

      <DataGrid
        rows={filteredData}
        columns={columns}
        pageSizeOptions={pageSizeOptions}
        pagination
        autoHeight
        sx={{ height: 400 }}
      />

      <div style={{ display: "flex", justifyContent: "center", marginTop: 15 }}>
        <Button variant="outlined" onClick={() => setPageSize(5)}>
          5 筆/頁
        </Button>
        <Button variant="outlined" onClick={() => setPageSize(10)} sx={{ ml: 2 }}>
          10 筆/頁
        </Button>
      </div>
    </Container>
  );
}