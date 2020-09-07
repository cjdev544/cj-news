import React from 'react'
import shortid from 'shortid'
import PropTypes from 'prop-types'
import MyNew from './MyNew'

const NewsList = ( { newList } ) => (
    <div className="row">
        {
            newList.map( myNew => (
                <MyNew
                    key={ shortid.generate() }
                    myNew={ myNew }
                />
            ))
        }
    </div>
)

NewsList.propTypes = {
    newList: PropTypes.array.isRequired
}
 
export default NewsList