import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import getNews from '../assets/helper/getNews'

const NewsContext = createContext([])

export function useNews() {
  return useContext(NewsContext)
}

export default function NewsProvider({ children }) {
  const [news_list, setNews_list] = useState([])

  useEffect(() => {
    axios
      .get('https://admin.snmleathers.com/api/news', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
        },
      })
      .then((res) => {
        if (res.status === 200) {
          const { data } = res.data
          const { articles } = data
          const filtered = getNews(articles)
          setNews_list(filtered)
        }
      })
      .catch((err) => {
        alert(err.message)
      })
  }, [])

  return news_list ? (
    <NewsContext.Provider value={news_list}>{children}</NewsContext.Provider>
  ) : (
    ''
  )
}
