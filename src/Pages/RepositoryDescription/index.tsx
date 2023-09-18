import * as S from './style'
import { Header } from '../../Components/Header/Header'
import { Repository, RepositoryProperties } from '../../Components/Repositories'
import { getRepositories } from '../../Service/Github'
import { useLoading } from '../../Contexts/LoadingContext'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Loading } from '../../Components/Loading'

export function RepositoryDescription() {
  const { isLoading, setLoadingState } = useLoading()
  const navigate = useNavigate()
  const { user, id } = useParams();
  const [repository, setRepository]=useState<RepositoryProperties>();

  const getRepository = async () => {
    setLoadingState(true)
    await getRepositories(user as string)
      .then(e => {
        console.log(e);
        const repFound = e.find((repositoryFound:RepositoryProperties)=>repositoryFound.id === +id!);
        console.log(repFound);
        setRepository(repFound);
        setLoadingState(false)
      })
      .catch(() => {
        console.log('a')
        navigate('/')
        setLoadingState(false)
      })
  }

  useEffect(() => {
    getRepository()
  }, [])


  return (
    <S.RepositoryDescriptionPage>
      <Header isVisibleOnLargeScreens />

      <S.RepositoryDescriptionMain>
        <h2>Especificações</h2>

        <S.RepositoryDetailsBox>
          {!repository && isLoading?<Loading/>:<Repository repositoryDetails repository={repository!} username={user!} />}
        </S.RepositoryDetailsBox>
      </S.RepositoryDescriptionMain>
    </S.RepositoryDescriptionPage>
  )
}
