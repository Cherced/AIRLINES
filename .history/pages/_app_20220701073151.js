import '../sass/global.scss'
import {MenuFloatContextProvider} from "../components/atoms/BannerStaff/FloatMenuContext"

function MyApp({ Component, pageProps }) {
    return<MenuFloatContextProvider>
            <Component {...pageProps} /> 
          </MenuFloatContextProvider>  
}
  
  export default MyApp