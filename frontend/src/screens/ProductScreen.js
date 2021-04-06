import React, {useState, useEffect} from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Row, Col, Image, ListGroup, Button, Card  } from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'


function ProductScreen({match}) {
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product} = productDetails


    useEffect(() => {
       dispatch(listProductDetails(match.params.id))
    }, [])

    return (

        <div>
            
            <LinkContainer to="/" className = "btn btn-light my-3">
                <Button>Go Back</Button>
            </LinkContainer>
            {loading?
                <Loader />
                : error
                    ?<Message variant='danger'>{error}</Message>
                :(
     
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
                )
            }

          
        </div>
    )
}

export default ProductScreen