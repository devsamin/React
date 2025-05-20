import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const gyms = [
  {
    id: 1,
    name: "Iron Beast Gym",
    features: ["24/7 Access", "Personal Trainer", "Free Weights", "Cardio Zone"],
    price: 50
  },
  {
    id: 2,
    name: "FitZone Fitness Club",
    features: ["Group Classes", "Sauna", "Yoga Studio", "Locker Room"],
    price: 40
  },
  {
    id: 3,
    name: "Muscle Factory",
    features: ["Strength Training", "Bodybuilding Equipment", "Supplements Bar", "Certified Coaches"],
    price: 60
  },
  {
    id: 4,
    name: "Flex & Burn Studio",
    features: ["HIIT Training", "Zumba", "Steam Room", "Diet Planning"],
    price: 45
  },
  {
    id: 5,
    name: "Core Power Gym",
    features: ["CrossFit", "Outdoor Training", "Massage Therapy", "Nutrition Counseling"],
    price: 55
  }
];

    return (
        <div className='grid md:grid-cols-3 gap-6 m-10'>
          
            {
                gyms.map(gym => <PriceOption key={gym.id} gym={gym}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;