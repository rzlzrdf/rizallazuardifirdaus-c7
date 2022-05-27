import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//import style from '../styles/template.module.css'
import NavigateBar from '../Components/NavigateBar/NavigateBar'
import FooterBar from '../Components/Footer/FooterBar'


function MyApp({ Component, pageProps }) {

  
  return (
    <div>
      <NavigateBar />
      <Component {...pageProps} />
      <FooterBar />
    </div>
  
  )
}

export default MyApp
