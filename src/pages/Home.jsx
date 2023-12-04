import {useState, useEffect} from 'react'; // на чем лучше делать обратотку get параметров backend или frontend?
import {useLocation, useNavigate} from 'react-router-dom'; // хука useHistory нет в текущей версии react-router-dom
import {getAllcategories} from '../api';
import {Preloader} from '../components/Preloader'
import {CategoryList} from '../components/CategoryList'
import {Search} from '../components/Search'

const Home = () => {
	const [catalog, setCatalog] = useState([]);
	const [filterdCatalog, setFilterdCatalog] = useState([]);

	const {pathname, search} = useLocation();  // мне не понятно как работает хук
	const navigate = useNavigate();
	// console.log(navigate);
	console.log('search - ', search, 'pathname - ', pathname);

	const handleSearch = (str) => {
		setFilterdCatalog(
			catalog.filter((item) =>
				item.strCategory.toLowerCase().includes(str.toLowerCase())) //откуда toLowerCase()? и как эта строка работает вообще(item.strCategory)?(в этой строке мы смотртим есть лм у нас str в item.strCategory)
		)
		navigate({
			pathname,
			search: `?search=${str}` //??
		});
	}

	useEffect(() => {
		getAllcategories().then(data => {
			setCatalog(data.categories);
			setFilterdCatalog(search ?
				data.categories.filter(item =>
					item.strCategory
					.toLowerCase()
					.includes(search.split('=')[1].toLowerCase())
				) : data.categories
			);
		})
	}, [search]);

	return (
		<>
			<Search cb={handleSearch} />
			{!catalog.length ? <Preloader /> : (
				<CategoryList catalog={filterdCatalog} /> // как можно по-другому передать filterdCatalog?
			)}
		</>
	)
}

export {Home};
