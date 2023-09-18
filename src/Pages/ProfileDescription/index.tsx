import * as Styles from './styles'
import { Header } from '../../Components/Header/Header'
import { DetailsProfile, UserProperties } from '../../Components/DetailsProfile'
import { useLoading } from '../../Contexts/LoadingContext'
import { Loading } from '../../Components/Loading'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUser, getRepositories } from '../../Service/Github'
import { RepositoryProperties } from '../../Components/Repositories'

export function ProfileDescription() {
  const { isLoading, setLoadingState } = useLoading()
  const navigate = useNavigate()
  const { user: username } = useParams()
  const [user, setUser] = useState<UserProperties>();
  const [repository, setRepository]=useState<RepositoryProperties[]>([]);

  const getUserGit = async () => {
    setLoadingState(true)
    await getUser(username as string)
      .then(e => {
        setUser(e);
        setLoadingState(false)
      })
      .catch(() => {
        navigate('/')
        setLoadingState(false)
      })
  }

  useEffect(() => {
    getUserGit()
  }, [])

  const getRepository = async () => {
    setLoadingState(true)
    await getRepositories(username as string)
      .then(e => {
        setRepository(e);
        setLoadingState(false)
      })
      .catch(() => {
        navigate('/')
        setLoadingState(false)
      })
  }

  useEffect(() => {
    getRepository()
  }, [])

  return (
    <Styles.ProfileDescription>
      <Header isVisibleOnLargeScreens />
      {isLoading ? (
        <Styles.LoadingContent>
          <Loading />
        </Styles.LoadingContent>
      ) : (
        <DetailsProfile user={user} repository={repository}/>
      )}
    </Styles.ProfileDescription>
  )
}
