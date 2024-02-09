import '@/styles/globals.css'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import dotenv from 'dotenv';
import Loader from '@/components/Loader';
import { useEffect, useState } from 'react';



export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
   function handleFullScreenChange(event) {
    if (document.fullscreenElement) {
      alert('Entered full-screen mode');
    } else {
      alert('Exited full-screen mode');
    }
  }

  

  useEffect(() => {
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.onkeydown = function (e) {
      if (event.keyCode === 123) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
        return false;
      }
      if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
        return false;
      }
    };

 
    document.addEventListener('fullscreenchange', handleFullScreenChange);


    return () => {
      document.removeEventListener('contextmenu', event => event.preventDefault());
      document.onkeydown = null;
    };
  }, []);



  function handleContextMenu(event) {
    event.preventDefault();
  }
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}
