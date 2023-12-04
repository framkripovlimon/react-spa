import {useParams, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getFilteredCategory} from '../api';

import {Preloader} from '../components/Preloader';
import {MealList} from '../components/MealList';

const Category = () => {
	const {name} = useParams();
	const [meals, setMeals] = useState([]);

	const navigate = useNavigate();
	
	useEffect(() => {
		getFilteredCategory(name).then((data) => setMeals(data.meals));
	}, [name]);

	return <>
		<button className='btn' onClick={() => navigate('/')}>
			Go back
		</button>

		{!meals.length ? <Preloader /> : <MealList meals={meals} />}
	</>
}

export {Category}
