import { styled } from 'styled-components'

export const ProfileDescription = styled.div`
  background-color: var(--background-page);
  display: flex;
  flex-direction: column;
  gap: 32px;
  overflow: hidden;
  padding: 0 50px 42px 50px;
  height: 100%;
  max-width: 1440px;

  @media (max-width: 750px) {
    padding: 0 20px;
  }

  @media (max-width: 330px) {
    padding: 0 5px;
  }
`
export const LoadingContent = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
