import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'

import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { CyclesContextPorvider } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextPorvider>
          <Router />
        </CyclesContextPorvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
