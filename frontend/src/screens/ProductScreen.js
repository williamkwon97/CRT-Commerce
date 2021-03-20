import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Row, Col, Image, ListGroup, Button, Card  } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products';

function ProductScreen({match}) {
    const product = products.find((p) => p._id === match.params.id)
    console.log('wfw')
    return (

        <div>
            
            <LinkContainer to="/" className = "btn btn-light my-3">
                <Button>Go Back</Button>
            </LinkContainer>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">

                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                        </ListGroup.Item>

                        <ListGroup.Item>
                            ${product.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            {product.description}
                        </ListGroup.Item>

                    </ListGroup>
                
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <Row>
                                <Col>Price:</Col>
                                <Col><strong>${product.price}</strong></Col>
                            </Row>
                        </ListGroup>

                        <ListGroup variant="flush">
                            <Row>
                                <Col>Status:</Col>
                                <Col><strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong></Col>
                            </Row>
                        </ListGroup>


                        <ListGroup variant="flush">
                            <Button className='btn-block' disabled={product.countInStock == 0} type='button'> Add To Cart</Button>
                        </ListGroup>
                    </Card>

                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen