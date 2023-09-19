import PriceOptions from "../PriceOptions/PriceOptions";

const PriceOption = [
    {
      id: 1,
      name: 'Basic Membership',
      price: '$30',
      features: [
        'Access to cardio equipment',
        'Access to weightlifting area',
        'Locker room access',
        'Basic fitness classes',
        '24/7 gym access',
        'Discounts on personal training sessions'
      ]
    },
    {
      id: 2,
      name: 'Premium Membership',
      price: '$50',
      features: [
        'Full gym access',
        'Unlimited fitness classes',
        'Personal trainer sessions (2/month)',
        'Access to sauna and spa',
        'Nutritional counseling',
        'Complimentary towels and water bottles'
      ]
    },
    {
      id: 3,
      name: 'Family Membership',
      price: '$80',
      features: [
        'Access for two adults and two children',
        'Full gym access',
        'Access to kid\'s play area',
        'Family fitness classes',
        'Discounts on family group training',
        'Childcare services'
      ]
    }
  ];
const Price = () => {
    return (
        <div>
            <h2 className="text-5xl font-bold text-center mb-5">Here You Can Find your Package!!</h2>
            <div className="grid lg:grid-cols-3 gap-4 mx-10 text-white">
                {
                    PriceOption.map(option => <PriceOptions key={option.id} option={option}></PriceOptions>)
                }
            </div>
        </div>
    );
};

export default Price;