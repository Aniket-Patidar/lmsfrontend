import '@/styles/globals.css'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import dotenv from 'dotenv';
import Loader from '@/components/Loader';
import { useEffect, useState } from 'react';



export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
  }, [])


  return loading ? <div className='h-[100vh] w-[100vw] flex items-center justify-center bg-c1'>
    <Loader>  </Loader>
  </div> : <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}
