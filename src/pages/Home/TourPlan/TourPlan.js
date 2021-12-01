import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './TourPlan.css';

const TourPlan = (props) => {
    const { _id, tourName, tourImg } = props.plan;
    const history = useHistory();

    const handleTourDetail = () => {
        history.push(`/tourDetail/${_id}`)
    }

    return (
        <>
            <Card className="single-plan">
                <Card.Img variant="top" src={tourImg} />
                <Card.Body className="d-flex justify-content-between">
                    <h5>
                        {tourName}
                    </h5>
                    <p><button onClick={handleTourDetail} className="detail-btn">Details</button></p>
                </Card.Body>
            </Card>
        </>
    );
};

export default TourPlan;