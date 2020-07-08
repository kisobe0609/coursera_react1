import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return(
                <div></div>
            );
        }
    }
    showComment(dish) {
        if (dish != null) {
            const comment = this.props.selectedDish.comments.map((comment) => {
                return (
                <div>
                    <p>Author: {comment.author}</p>
                    <p>Rating: {comment.rating}</p>
                    <p>Comment: {comment.comment}</p>
                    <p>Date: {comment.date}</p>
                    <hr />
                </div>
                );
            }
            );
            return(
                <div>
                <h4>Comments on {dish.name}</h4>
                {comment}
                </div>
            );
        }
    }

    render() {
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.showComment(this.props.selectedDish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;