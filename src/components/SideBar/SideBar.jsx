import React from 'react'
import {
  categories,
  redColor
} from "../../utils/constants.jsx";
import { Stack } from "@mui/material";
import styles from "./SideBar.module.scss";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction='row'
      sx={{
        overflowY: 'auto',
        height: {
          xs: 'auto',
          md: '90%'
        },
        flexDirection: {
          md: 'column',
        }
      }}
    >
      {categories.map((category) => (
        <button
          className={styles['category-btn']}
          key={category.name}
          style={{
            background: category.name === selectedCategory && redColor,
            color: 'white',
          }}
          onClick={() => setSelectedCategory(category.name)}
        >
          <span style={{
            color: category.name === selectedCategory ? 'white' : 'red',
            marginRight: '15px',
          }}>
            {category.icon}
          </span>
          <span style={{
            opacity: category.name === selectedCategory ? '1' : '0.8',
          }}>
            {category.name}
          </span>
        </button>
      ))}

    </Stack>
  )
}
export default SideBar
