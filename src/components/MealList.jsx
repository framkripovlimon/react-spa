import {Meal} from './Meal';

const MealList = (props) => {
	return <div className='list'>
		{props.meals.map(meal => (
			<Meal key={meal.idMeal} {...meal} />
		))}
	</div>
}

export {MealList}
