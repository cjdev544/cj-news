import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

/**
 *  Styled Components *************************************
 */
const Heading = styled.h3`
    font-family: 'Raleway', sans-serif;
    font-size: 1.5rem;
`

 /* **************************************************** */

const MyNew = ( { myNew }) => {

    const { urlToImage, url, title, description, source } = myNew

    const image = ( urlToImage ) 
    ?
    <div className="card-image">
        <img src={ urlToImage } alt={title} />
        <span className="card-title">{source.name}</span>
    </div> 
    : null


    return ( 
        <div className="col s12 m6 l4">
            <div className="card">
                { image }
                <div className="card-content">
                    <Heading>{ title }</Heading>
                    <p>{ description }</p>
                </div>
                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >
                        Ver Noticia Completa
                    </a>
                </div>
            </div>
        </div>
     )
}

MyNew.propTypes = {
    myNew: PropTypes.object.isRequired
}
 
export default MyNew