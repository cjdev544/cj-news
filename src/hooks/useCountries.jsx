import React, { useState } from 'react'
import shortid from 'shortid'
import styled from '@emotion/styled'

/**
 *  Styled Component **************************************
 */
const DivInput = styled.div`
    margin-top: 2rem;
`

const Label = styled.label`
    font-family: 'Raleway', sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: #000;
`

 /* **************************************************** */

const useCountries = ( label, initialState, options ) => {

    const [state, setState] = useState( initialState )

    const ShowCountries = () => (
        <DivInput>
            <Label>{ label }</Label>
            <select
                className="browser-default"
                value={ state }
                onChange={ e => setState( e.target.value )} 
            >
                {
                    options.map( option => (
                        <option
                            key={ shortid.generate() }
                            value={ option.value }
                        >
                            { option.label }
                        </option>
                    ))
                }
            </select>
        </DivInput>
    )

    return [ state, ShowCountries ] 

}
 
export default useCountries