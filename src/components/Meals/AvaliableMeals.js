import classes from './AvaliableMeals.module.css' 
import Card from '../Ui/Card'
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 1600,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 1100,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 800,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 1000,
    },
    {
        id:'m5',
        name:'Dal makhani',
        description :'indian,veg,tasty',
        price:2100
    },
    {
       id:'m6',
       name:'butter naan',
       description:'taste better with dal,flavory',
       price:200
    },
    {
        id:'m7',
        name:' chicken biryani',
        description:' made with rice ,cooked in pressure',
        price:2800
    },
    {
        id:'m8',
        name:'palak paneer',
        description:' spianch,juicy,veg,',
        price:1500

    }
  ];
const AvaliableMeals =()=>{
    const mealsList=DUMMY_MEALS.map(meal=><MealItem key ={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}></MealItem>);
    return <section className={classes.meals}>
      <Card>  <ul>
            {mealsList}
        </ul>
        </Card>
    </section>
}
export default AvaliableMeals;
