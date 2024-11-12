import {useEffect} from 'react'

const ScreenRedirect = () => {

  useEffect(()=>{
    const redirectBasedOnScreenSize = () => {
      if (!window.matchMedia("(max-width: 768px)").matches) {
        // Redirect for small screens (like mobile)
        window.location.href = "https://fims-web.vercel.app";
      }
    };

    redirectBasedOnScreenSize();
  }, [])

  return null;
}

export default ScreenRedirect