import { Repository, RepositoryProperties} from '../Repositories'
import * as Styles from './styles'


export interface UserProperties{
  name: string;
  bio?: string;
  avatar_url: string;
  login:string;

}
interface InputProps {
  user?: UserProperties;
  repository: RepositoryProperties[];
}

export function DetailsProfile(props: InputProps) {
  return (
    <Styles.DetailsProfile>
      <h2>Informações do Perfil</h2>
      <Styles.ProfileDescription>
        <img
          src={props.user?.avatar_url}
          alt=""
        />

        <Styles.BioAndName>
          <h4>
            Nome: <strong>{props.user?.name}</strong>
          </h4>
          <h4>
            Bio:{' '}
            <p>
              {props.user?.bio}
            </p>
          </h4>
        </Styles.BioAndName>
      </Styles.ProfileDescription>

      <Styles.SectionRepository>
        <h2>Repositórios</h2>
        <Styles.RepositorysBox>
          {props.repository.map((repo)=><Repository repository={repo} username={props.user!.login}/>)}
        </Styles.RepositorysBox>
      </Styles.SectionRepository>
    </Styles.DetailsProfile>
  )
}
