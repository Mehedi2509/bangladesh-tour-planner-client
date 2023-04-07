import React, { useState } from 'react';
import './BuyTicket.css';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const BuyTicket = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const [person, setPerson] = useState({});

    const onSubmit = data => {
        console.log(data)
        fetch('https://bangladesh-tour-planner-server.vercel.app/buyTicket', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                alert('Buy successful')
                setPerson(result);
                reset();
            })
    };

    console.log(person);

    return (
        <div>
            <form className="ticket-form" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="my-4">Buy Ticket</h2>
                <input {...register("tourName")} defaultValue="" placeholder="Tour Name" />
                <br />
                <input {...register("name")} defaultValue={user.displayName} placeholder="Name" />
                <br />
                <input {...register("email")} defaultValue={user.email} placeholder="Email" />
                <br />
                <input {...register("address")} placeholder="Address" />
                <br />
                <input {...register("number")} placeholder="Contact Number" />
                <br />
                <input {...register("ticketPrice")} defaultValue="" placeholder="Ticket Price" />
                <br />
                <input className="mb-5 btn-success" type="submit" value="Buy Now" />
            </form>
        </div>
    );
};

export default BuyTicket;