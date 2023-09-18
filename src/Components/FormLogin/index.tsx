import { useEffect } from 'react'
import { getUser } from '../../Service/Github'

import { useNavigate } from 'react-router-dom'
import { useLoading } from '../../Contexts/LoadingContext'
import { useShowAlert } from '../../Contexts/AlertContext'
import * as Styles from './styles'

export function FormLogin() {
  
  const { setShowAlertState, showAlert } = useShowAlert()
  const navigate = useNavigate()
  const { setLoadingState } = useLoading()

 

  const handleSubmitButton = async () => {
    const searchUser = document.querySelector('#searchUser') as HTMLInputElement
    const userName = searchUser.value
    setLoadingState(true)
    await getUser(userName)
      .then(() => navigate(`/profile/${userName}`))
      .catch(() => {
        setShowAlertState(true)
        setLoadingState(false)
      })
  }
  useEffect(() => {
    const AlertBox = document.querySelector('#AlertBox')
    if (showAlert) {
      AlertBox?.classList.add('active')
    } else {
      AlertBox?.classList.remove('active')
    }
  }, [showAlert])

  const handleCloseAlertButton = () => {
    setShowAlertState(false)
  }
  return (
    <>
      <h2>Entrar</h2>
      <Styles.AlertBox id="AlertBox">
        <Styles.AlertBalls>
          <button onClick={() => handleCloseAlertButton()}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="25" fill="#C24914" />
              <path
                d="M20 20L30 30"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M30 20L20 30"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="3"
              cy="3"
              r="3"
              transform="matrix(1 0 0 -1 0 6)"
              fill="#C24914"
            />
          </svg>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9.99927" cy="10" r="10" fill="#C24914" />
          </svg>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5" cy="5" r="5" fill="#C24914" />
          </svg>
        </Styles.AlertBalls>
        <Styles.AlertMessage>
          <Styles.CloseButton onClick={() => handleCloseAlertButton()}>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L9 9" stroke="white" strokeLinecap="round" />
              <path d="M9 1L1 9" stroke="white" strokeLinecap="round" />
            </svg>
          </Styles.CloseButton>
          <h2>Ops!</h2>
          <p>Não conseguimos indentificar sua conta.</p>
        </Styles.AlertMessage>
      </Styles.AlertBox>
      <Styles.LabelAndInput id="userSearch">
        Usuário
        <input
          id="searchUser"
          name="search"
          type="text"
          placeholder="Digite aqui seu usuário do Github"
        />
      </Styles.LabelAndInput>
      <Styles.ButtonSubmitForm onClick={() => handleSubmitButton()}>
        Entrar
      </Styles.ButtonSubmitForm >
    </>
  )
}
