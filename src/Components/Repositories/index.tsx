import { useNavigate } from 'react-router-dom'
import * as Styles from './styles'

interface RepositoryProps {
  repositoryDetails?: boolean;
  repository?:RepositoryProperties;
  username:string;
}

export interface RepositoryProperties{
  id: number,
  html_url?: string,
  description: string,
  language: string,
  private: boolean
}

export function Repository({ repositoryDetails,repository,username }: RepositoryProps) {
  const navigate = useNavigate();

  function onClick(){
   navigate(`/repository/${username}/${repository?.id}`)

  }

  if (repositoryDetails) {
    return (
      <Styles.Repository details>
        <h3>Repositório</h3>

        <Styles.RepositoryDiv details>
          <h4>
            Link: <p>{repository?.html_url}</p>
          </h4>
        </Styles.RepositoryDiv>
        <Styles.RepositoryDiv details>
          <h4>
            Privacidade: <p>{repository?.private?'Privado':'Publico'}</p>
          </h4>
        </Styles.RepositoryDiv>
        <Styles.RepositoryDiv details>
          <h4>
            Linguagem: <p>{repository?.language}</p>
          </h4>
        </Styles.RepositoryDiv>

        <Styles.RepositoryDiv details>
          <h4>
            Descrição:{' '}
            <p>
              {repository?.description}{' '}
            </p>
          </h4>
        </Styles.RepositoryDiv>
      </Styles.Repository>
    )
  } else {
    return (
      <Styles.Repository details={false} onClick={onClick} >
        <h3>Repositório</h3>

        <Styles.RepositoryDiv details={false}>
          <h4>
            Link: <p>{repository?.html_url}</p>
          </h4>
        </Styles.RepositoryDiv>
        <Styles.RepositoryDiv details={false}>
          <h4>
            Descrição:{' '}
            <p>
              {repository?.description}{' '}
            </p>
          </h4>
        </Styles.RepositoryDiv>
      </Styles.Repository>
    )
  }
}
