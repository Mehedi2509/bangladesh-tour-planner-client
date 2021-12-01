import { useEffect, useState } from "react";


const useTourPlan = () => {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        fetch('https://shielded-ridge-36942.herokuapp.com/tourPlans')
            .then(res => res.json())
            .then(data => setPlans(data))
    }, [])

    return {
        plans,
        setPlans
    }
}

export default useTourPlan;