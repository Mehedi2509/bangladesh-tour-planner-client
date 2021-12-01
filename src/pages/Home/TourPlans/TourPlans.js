import React from 'react';
import useTourPlan from '../../../hooks/useTourPlan';
import TourPlan from '../TourPlan/TourPlan';
import './TourPlans.css';

const TourPlans = () => {
    const { plans } = useTourPlan();

    return (
        <div>
            <h2>Our Tour Plans</h2>
            <div className="tour-plans">
                {
                    plans.map(plan => <TourPlan key={plan._id} plan={plan}></TourPlan>)
                }
            </div>
        </div>
    );
};

export default TourPlans;