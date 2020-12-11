import React from 'react'
import {Card, CardTitle, CardText, CardBody, CardSubtitle } from 'reactstrap'


const Rental = props => {

    return(
        <div>
            <div className="laptopCard">
                <Card>
                    <CardBody>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Laptop:</CardSubtitle>
                        <CardTitle tag="h5">{props.laptop}</CardTitle>
                        <br/>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Name:</CardSubtitle>
                        <CardTitle tag="h5">{props.name}</CardTitle>
                        <br/>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Email:</CardSubtitle>
                        <CardTitle tag="h5">{props.email}</CardTitle>
                        <br/>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Date:</CardSubtitle>
                        <CardText>{props.requestDate}</CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default Rental