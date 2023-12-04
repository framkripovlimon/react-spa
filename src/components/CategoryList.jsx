import {CategoryItem} from './CategoryItem'

const CategoryList = ({catalog = []}) => {

	return (
			<div className='list'>
				{catalog.map(el => (
					<CategoryItem
						key={el.idCategory}
						idCategory={el.idCategory}
						strCategory={el.strCategory}
						strCategoryDescription={el.strCategoryDescription}
						strCategoryThumb={el.strCategoryThumb}
					/>
				))}
			</div>
	)
}

export {CategoryList}
