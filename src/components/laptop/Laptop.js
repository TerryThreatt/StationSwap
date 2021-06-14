import React from 'react'
import {Card, Button, CardTitle, CardText, CardBody, CardSubtitle } from 'reactstrap'
import {Link} from 'react-router-dom'

const Laptop = props => {

    return (
        <div>
            <div className="laptopCard">
                <Card>
                    <CardBody>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Laptop:</CardSubtitle>
                        <CardTitle tag="h5">{props.name}</CardTitle>
                        <br/>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Specs:</CardSubtitle>
                        <CardText>{props.specs}</CardText>
                        <Link to='/rentals/new'>
                        <Button color='info'>
                            Rent
                        </Button>
                    </Link>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}


export default Laptop