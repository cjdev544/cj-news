import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Axios from 'axios'
import NewsList from './components/NewsList'
import Spinner from './components/Spinner'

function App() {

  // useStates
  const [ country, setCountry ] = useState( 've' )

  const [ category, setCategory ] = useState( '' )

  const [ newList, setNewList ] = useState( [] )

  const [ load, setLoad ] = useState( false )


  // useEffect
  useEffect( () => {

    const getApi = async () => {
      const res = await Axios.get(`https://newsapi.org/v2/top-headlines?country=${ country }&category=${ category }&apiKey=03a945f7433440d4924e439a84df5438`) 

      setLoad( true )

      setTimeout(() => {
        setNewList(res.data.articles)
        setLoad( false )
      }, 3000);
    }
    getApi()

  }, [country, category])


  return (
    <>
      <Header 
        title="Buscador de Noticias"
      />
      <div className="container white">
        <Form 
          setCountry={ setCountry }
          setCategory={ setCategory }
        />
        
        {
          load 
          ? 
          <Spinner />
          :
          <NewsList 
            newList={ newList } 
          />
        }
        
      </div>
    </>
  );
}

export default App;
