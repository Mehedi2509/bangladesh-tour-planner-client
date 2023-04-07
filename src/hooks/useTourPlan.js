import { useEffect, useState } from "react";


const useTourPlan = () => {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        fetch('https://bangladesh-tour-planner-server.vercel.app/tourPlans')
            .then(res => res.json())
            .then(data => setPlans(data))
    }, [])

    return {
        plans,
        setPlans
    }
}

export default useTourPlan;