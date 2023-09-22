import Project from '../types/Project'

export const projectsList: Project[] = [
  {
    id: '1',
    name: 'World Weather App',
    description: "可以查詢城市的天氣，並將城市加入或移除清單，以追蹤清單內城市的天氣。",
    tags: [
      'Vue3',
      'TailwindCSS'
    ],
    img: 'world-weather-app.png'
  },
  {
    id: '2',
    name: 'Simple Twitter',
    description: "模擬社群軟體 Twitter ，所做出來的簡易社群軟體，前台功能: 註冊功能、登入登出功能、推文功能、留言功能、追蹤其他使用者、喜愛貼文、個人資訊頁面、查看使用者追蹤、查看使用者留言過的貼文、查看使用者按讚的貼文，後台功能: 登入登出、刪除貼文",
    tags: [
      'Vue2',
      'Sass'
    ],
    img: 'simple-twitter.png'
  },
  {
    id: '3',
    name: 'Restaurant Forum',
    description: "餐廳論壇，登入、登出、註冊功能，可以根據分類顯示餐廳，餐廳評論留言、個人資訊頁面、收藏餐廳、點讚餐廳，後台建立、刪除、編輯餐廳資訊，建立、刪除、編輯餐廳分類。",
    tags: [
      'Vue2',
      'Bootstrap'
    ],
    img: 'forum.png'
  }
]