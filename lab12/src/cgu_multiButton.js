import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const MultiButton = (num) => {
  const buttonStyles = {
    margin: '8px', // 按鈕間距
    transition: 'all 0.3s ease', // 平滑過渡效果
    '&:hover': {
      transform: 'scale(1.1)' // 懸浮時稍微放大
    }
  };

  const output = [
    <IconButton 
      key="shopping-cart"
      color="primary" 
      aria-label="add to shopping cart"
      sx={buttonStyles}
    >
      <AddShoppingCartIcon />
    </IconButton>,
    <IconButton 
      key="delete"
      color="primary" 
      aria-label="delete"
      sx={buttonStyles}
    >
      <DeleteIcon />
    </IconButton>,
    <IconButton 
      key="alarm"
      color="primary" 
      aria-label="add an alarm"
      sx={buttonStyles}
    >
      <AlarmIcon />
    </IconButton>
  ];


  return output;
};

export default MultiButton;