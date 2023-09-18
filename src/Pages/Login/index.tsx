import { Logo } from '../../Components/Logo'
import { FormAccess } from '../../Components/FormAccess'
import { Header } from '../../Components/Header/Header'
import * as Styles from './styles'
export function Login() {
  return (
    <Styles.Login>
      <Header isVisibleOnLargeScreens={false} />
        <Logo />
      <FormAccess />
    </Styles.Login>
  )
}
