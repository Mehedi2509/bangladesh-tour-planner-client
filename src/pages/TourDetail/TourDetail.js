import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import './TourDetail.css';

const TourDetail = () => {
    const { id } = useParams();
    const [plan, setPlan] = useState({});
    const history = useHistory();

    useEffect(() => {
        fetch(`https://bangladesh-tour-planner-server.vercel.app/tourPlans/${id}`)
            .then(res => res.json())
            .then(data => setPlan(data))
    }, [])

    const { tourName, tourImg, tourPoint, tourPlaces, tourTime, tourDate, tourDescription, totalSeats, booking, phone, ticketPrice } = plan;

    const handleBuyTicket = () => {
        history.push('/buyTicket')
    }

    return (
        <div className="plan-detail mx-auto my-4">
            <h2 className="mb-3">Tour Information</h2>
            <Card>
                <Card.Img variant="top" src={tourImg} />
                <Card.Body>
                    <Card.Text>
                        <h4 className="text-center text-secondary"><strong>{tourName}</strong></h4>
                        <div className="row mt-4">
                            <div className="col-lg-6">
                                <p><strong>Tour Start:</strong> {tourPoint}</p>
                                <p><strong>Tour Places:</strong> {tourPlaces}</p>
                                <p><strong>Total Seats:</strong> {totalSeats}</p>
                                <p><strong>Ticket Price:</strong> {ticketPrice}</p>
                            </div>
                            <div className="col-lg-6">
                                <p><strong>Tour Date:</strong> {tourDate}</p>
                                <p><strong>Tour Duration:</strong> {tourTime}</p>
                                <p><strong>Seats Booking:</strong> {booking}</p>
                                <p><strong>Contact Number:</strong> {phone}</p>
                            </div>
                        </div>
                        <p><strong>Description Of Tour Spot:</strong> {tourDescription}</p>
                        <p className="text-center mt-4"><button onClick={handleBuyTicket} className="ticket-btn">Buy Ticket</button></p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TourDetail;