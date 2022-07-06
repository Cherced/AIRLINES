import '../sass/global.scss'
import {MenuFloatContextProvider} from "../components/atoms/BannerStaff/FloatMenuContext"

// componente app infuenciado por un contexto de manejo de estado o fuente de verdad de el menu de idiomas

function MyApp({ Component, pageProps }) {
    return<MenuFloatContextProvider>
            <Component {...pageProps} /> 
          </MenuFloatContextProvider>  
}
  
  export default MyApp