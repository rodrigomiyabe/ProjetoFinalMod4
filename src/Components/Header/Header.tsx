import * as Styles from './styles'

interface HeaderProps {
  isVisibleOnLargeScreens: boolean
}

export function Header({ isVisibleOnLargeScreens }: HeaderProps) {
  return (
    <Styles.Header isVisibleOnLargeScreens={isVisibleOnLargeScreens}>
      <Styles.LogoHeader src="/logoHeader.svg" alt="Logo do Site" />
    </Styles.Header>
  )
}
