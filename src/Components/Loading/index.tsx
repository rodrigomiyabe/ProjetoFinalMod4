import * as Styles from './styles'

export function Loading() {
  return (
    <Styles.BoxLogo>
      <Styles.LoadingLogo
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="38.5" stroke="#0070E0" strokeWidth="3" />
        <circle
          cx="40"
          cy="40"
          r="20.5"
          stroke="#0070E0"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="20 20"
        />
      </Styles.LoadingLogo>

      <Styles.LoadingText>Carregando...</Styles.LoadingText>
    </Styles.BoxLogo>
  )
}
