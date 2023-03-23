import '../styles/globals.css'
import { ProviderComponent } from "../context/contextHome";
function MyApp({ Component, pageProps }) {
  return (
    <ProviderComponent>
      <Component {...pageProps} />
    </ProviderComponent>
  );
}

export default MyApp
