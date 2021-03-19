export const getCookie = (name, mode) => {
  try {
    const cookies = document.cookie
    const item = cookies.split('; ')?.find(cookie => cookie.startsWith(`${name}=`))?.split('=')[1]
    
    return item
  } catch (error) {
    return mode
  } finally {
    return mode
  }
}