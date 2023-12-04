import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from '../api';

import { Preloader } from '../components/Preloader';

const Recipe = () => {
	const [recipe, setRecipe] = useState({});
	const {id} = useParams();

	useEffect(() => {
		getMealById(id).then(data => setRecipe(data.meals[0]));
	}, [id]);
	
	return (
		<>
			{!recipe.idMeal ? <Preloader /> : (
				<div className="recipe">
					<img src={recipe.strMealThumb} alt={recipe.strMeal} style={{margin: '2rem, 0'}} />
					<h1>{recipe.strMeal}</h1>
					<h5>Category: {recipe.strCategory}</h5>
					{recipe.strArea ? <h5>Area: {recipe.strArea}</h5> : null}
					<p>{recipe.strInstructions}</p>

					<table className='centered'>
						<thead>
							<tr>
								<th>Ingredient</th>
								<th>Measure</th>
							</tr>
						</thead>
						<tbody>
							{
								Object.keys(recipe).map(key => {
									if (key.includes('Ingredient') && recipe[key]) {
										return (
											<tr key={key}>
												<td>{recipe[key]}</td>
												<td>{recipe[`strMeasure${key.slice(13)}`]}</td>
											</tr>
										)
									}
									return null;
								})
							}
						</tbody>
					</table>

					{recipe.strYoutube ? (
						<div className="row">
							<h4 style={{margin: '2rem 0'}}>Video recipe</h4>
							<iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
								-11
							)}`} allowFullScreen/>
						</div>
					) : null}
				</div>
			)}
		</>
	)
}

export {Recipe}
