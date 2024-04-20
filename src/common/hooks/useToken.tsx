import { useState, useEffect } from 'react'
import axios from 'axios'

const useToken = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  useEffect(() => {
    const retrieveTokens = async () => {
      try {
        const storedAccessToken = localStorage.getItem('accessToken')
        const storedRefreshToken = localStorage.getItem('refreshToken')

        if (!storedAccessToken) {
          if (storedRefreshToken) {
            const response = await axios.post('YOUR_REFRESH_TOKEN_ENDPOINT', {
              refresh_token: storedRefreshToken,
            })
            const newAccessToken = response.data.access_token
            setAccessToken(newAccessToken)
            localStorage.setItem('accessToken', newAccessToken)
            setIsLoggedIn(true)
          }
        } else {
          const decodedToken = JSON.parse(atob(storedAccessToken.split('.')[1]))
          const expirationTime = decodedToken.exp * 1000
          if (Date.now() >= expirationTime) {
            if (storedRefreshToken) {
              const response = await axios.post(
                'https://asia-northeast1-willeder-official.cloudfunctions.net/api/auth/refresh',
                {
                  refresh_token: storedRefreshToken,
                }
              )
              const newAccessToken = response.data.access_token
              setAccessToken(newAccessToken)
              localStorage.setItem('accessToken', newAccessToken)
              setIsLoggedIn(true)
            }
          } else {
            setIsLoggedIn(true)
          }
        }
      } catch (error) {
        console.error('Error retrieving/refreshing access token:', error)
        setIsLoggedIn(false)
        setAccessToken(null)
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
      }
    }

    retrieveTokens()
  }, [])

  return { accessToken, isLoggedIn }
}

export default useToken
