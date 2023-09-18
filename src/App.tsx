import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoadingContextProvider } from './Contexts/LoadingContext'
import { Login } from './Pages/Login'
import { GlobalStyle } from './Styles/globalStyles'
import { ProfileDescription } from './Pages/ProfileDescription'
import { RepositoryDescription } from './Pages/RepositoryDescription'
import { ShowAlertContextProvider } from './Contexts/AlertContext'
function App() {
  return (
    <>
      <GlobalStyle />
      <LoadingContextProvider>
        <ShowAlertContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />

              <Route
                path="/profile/:user"
                element={<ProfileDescription />}
              />
              <Route path="/repository/:user/:id" element={<RepositoryDescription />} />
            </Routes>
          </BrowserRouter>
        </ShowAlertContextProvider>
      </LoadingContextProvider>
    </>
  )
}

export default App
