import '../sass/global.scss'
import {MenuFloatContextProvider} from "../components/atoms/BannerStaff/FloatMenuContext"

// componente app, desde donde se instancian los demas componentes, infuenciado por un contexto de manejo de estado o fuente de verdad de el menu de idiomas

function MyApp({ Component, pageProps }) {
    return<MenuFloatContextProvider>
            <Component {...pageProps} /> 
          </MenuFloatContextProvider>  
}
  
  export default MyApp