import axios from 'axios'
import Cookies from 'js-cookie'
import { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext({})

export function useUser() {
  return useContext(UserContext)
}

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = Cookies.get('token')
    if (token) {
      const endpoint = 'https://admin.snmleathers.com/api/user'
      const headers = {
        Authorization: 'Bearer ' + token,
      }
      axios
        .get(endpoint, { headers })
        .then((res) => {
          if (res.status === 200) {
            const { data } = res.data
            data.auth = headers.Authorization
            setUser(data)
          }
        })
        .catch((err) => {
          const { message } = err.response.data
          alert(message)
        })
    }
  }, [])

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
