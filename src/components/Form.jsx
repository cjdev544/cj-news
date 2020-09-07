import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import useCategories from '../hooks/useCategories'
import useCountries from '../hooks/useCountries'

/**
 *  Styled Components *************************************
 */
const Search = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: left;
`

const Heading = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
`

const Button = styled.input`
    width: 100%;
`

 /* **************************************************** */

const Form = ( { setCountry, setCategory }) => {

    const CATEGORIES = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnología'},
    ]

    const COUNTRIES = [
        { value: 've', label: 'Venezuela'},
        { value: 'us', label: 'Estados Unidos'},
        { value: 'mx', label: 'Mexico'},
        { value: 'in', label: 'Inglaterra'},
        { value: 'co', label: 'Colombia'}
    ]

    const [ category, ShowCategories ] = useCategories( 'Categoría', 'general', CATEGORIES )

    const [ country, ShowContries ] = useCountries( 'Pais', 've', COUNTRIES )

    // Search News 
    const searchNews = e => {
        e.preventDefault()

        setCountry( country )
        setCategory( category )
    }


    return ( 
        <Search className="col s12 m8 offset-m2">
            <form
                onSubmit={ searchNews }
            >

                <Heading>Buscar por Pais Y Categoría</Heading>

                <ShowContries />

                <ShowCategories />

                <div className="input-field col s12">
                    <Button 
                        type="submit" 
                        className= "btn-large amber darken-2"
                        value="Buscar"
                    />
                </div>
            </form>
        </Search>
     )
}

Form.propTypes = {
    setCountry: PropTypes.func.isRequired,
    setCategory: PropTypes.func.isRequired
}
 
export default Form