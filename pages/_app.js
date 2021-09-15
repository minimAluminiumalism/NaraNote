import '../styles/globals.css'

import { ThemeProvider } from 'next-themes'
import { useAnalytics } from '../lib/analytics'

function MyApp({ Component, pageProps }) {
  useAnalytics();

  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
