import React, { Component} from 'react'
import {Card, CardTitle, CardText, CardBody, CardSubtitle } from 'reactstrap'


// change class component
class Rental extends Component {
    state = {
        likes: 0
    }

    handleClick = e => {
        e.preventDefault()
        this.setState(prevState =>  ({
            likes: prevState.likes + 1
        }))
        console.log(this.state.likes)
    }

render() {
        return(
            <div>
                <div className="laptopCard">
                    <Card>
                        <CardBody>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Laptop:</CardSubtitle>
                            <CardTitle tag="h5">{this.props.laptop}</CardTitle>
                            <br/>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Name:</CardSubtitle>
                            <CardTitle tag="h5">{this.props.name}</CardTitle>
                            <br/>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Email:</CardSubtitle>
                            <CardTitle tag="h5">{this.props.email}</CardTitle>
                            <br/>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Date:</CardSubtitle>
                            <CardText>{this.props.requestDate}</CardText>
                        </CardBody>
                        <button onClick={this.handleClick}>Add Like</button>
                        <h1>{this.state.likes}</h1>
                    </Card>


                </div>
            </div>
        )
}
}

export default Rental