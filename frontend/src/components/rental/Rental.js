import React from 'react'
import { connect } from 'react-redux'

const Rental = props => {

    const { rental } = props

    return(
        <div>
            {rental}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        rental: state.rental
    }
}

export default connect(mapStateToProps, null)(Rental)