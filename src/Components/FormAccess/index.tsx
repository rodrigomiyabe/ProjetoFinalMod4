import * as Styles from './styles'
import { useLoading } from '../../Contexts/LoadingContext'
import { Loading } from '../Loading'
import { FormLogin } from '../FormLogin'
import { useEffect } from 'react'

export function FormAccess() {
  const { isLoading } = useLoading()

  useEffect(() => {
    console.log(isLoading)
  }, [isLoading])

  return (
    <Styles.FormAccess>
      <Styles.FormBox>
        {!isLoading ? <FormLogin /> : <Loading />}
      </Styles.FormBox>
    </Styles.FormAccess>
  )
}
