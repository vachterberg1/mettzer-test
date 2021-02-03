import React, {useState, useEffect} from 'react'
import logoImg from '../../assets/logoMettzer.png'
import {
    HeaderDashboard,
    ContainerDashboard,
    Title, 
    Form,
    ContainerList,
    ListArticles,
} from './styles'
import {IoIosHeart, IoIosHeartEmpty, IoIosRemoveCircle} from 'react-icons/io'
import api from '../../api/services'

const DashboardPage = () => {

    //State usado para setar os artigos vindo da API.
    const [articles, setArticles] = useState([]);
    //State usado para setar os artigos favoritos.
    const [favorites, setFavorites] = useState([])
    
    useEffect(() => {
        const fav = localStorage.getItem('@MettzerTest: favorite')
        const favs = JSON.parse(fav)
        if (favs) {
            setFavorites(favs)
        }
    }, [favorites])

    const handleSearch = async (event) => {
        event.preventDefault()
        try {
            const response = await api.get(`/articles/search/data?page=1&pageSize=20&metadata=true&fulltext=false&citations=false&similar=false&duplicate=false&urls=false&faithfulMetadata=false&apiKey=nMfsxcpWADFUvJ2dY53QrbZKOiEBH1XS`)
            // const article = response.data.data;

            setArticles(response.data.data)

            console.log(articles, 'articles')
        } catch (error) {

        }
    }

    const handleFavorites = (article) => {
        const fav = localStorage.getItem('@MettzerTest: favorite')
        const favs = JSON.parse(fav)
        if (favs) {
            const findId = favs.findIndex(favorite => favorite.id === article.id)
            if (findId !== -1) {
                favs.splice(findId, 1)
                localStorage.setItem('@MettzerTest: favorite', JSON.stringify([...favs]))
                setFavorites([...favs])
                return;
            }

           localStorage.setItem('@MettzerTest: favorite', JSON.stringify([...favs, article]))
           setFavorites([...favs, article])
        } else {
            localStorage.setItem('@MettzerTest: favorite', JSON.stringify([article]))
            setFavorites([article])
        }
    }

    return (
        <> 
            <HeaderDashboard>
                <img src={logoImg} />
            </HeaderDashboard>

            <ContainerDashboard>
                <Title>
                    Busque pelos melhores artigos acadêmicos num simples clique!
                </Title>

                <Form>
                <input 
                // value={newRepo}
                // onChange={(e) => setNewRepo(e.target.value)}
                disabled
                placeholder="Digite o que deseja buscar"/>
                <button type="submit" onClick={handleSearch}>Pesquisar</button>
                </Form>

                    <ContainerList>
                    <h1>Lista de artigos</h1>

                   {articles.map((item) => {
                        return(
                            <ListArticles key={item.id}>
                                <section>
                                    <strong>{item.title}</strong>
                                    <p>{item.description}</p>
                                    <h2>Authors:</h2> <p>{item.authors}</p>
                                </section>
                                <button>
                                {favorites.find(favorite => favorite.id === item.id) ? <IoIosHeart
                                    fontSize={26} 
                                    color="red"
                                    onClick={() => {handleFavorites(item)} }/>
                                     : <IoIosHeartEmpty
                                    fontSize={26} 
                                    color="red"
                                    onClick={() => {handleFavorites(item)} }/>}

                                </button>
                            </ListArticles>
                        )
                   })}
                </ContainerList>
                <ContainerList>
                    <h1>Lista de favoritos</h1>
                    {favorites.map((favs) => {
                        return  (
                            <ListArticles key={favs.id}>

                            <section>
                                <strong>{favs.title}</strong>
                                <p>{favs.authors}</p>
                            </section>
                            <button>
                                <IoIosRemoveCircle
                                fontSize={26} 
                                color="red"
                                onClick={() => {handleFavorites(favs)} }/>
                            </button>
                        </ListArticles>
                        )
                    })}
                </ContainerList>
            </ContainerDashboard>
        </>
    )
}

export default DashboardPage