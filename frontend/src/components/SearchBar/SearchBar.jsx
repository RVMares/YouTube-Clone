import './SearchBar.css'
import useCustomForm from '../../hooks/useCustomForm';
import { Link } from 'react-router-dom';

const SearchBar = ({searchInput, setSearchInput}) => {
    const [formValues, handleInputChange, handleSubmit] = useCustomForm()

    return ( 
        <div>
            <form className='searchBar-form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={searchInput}
                    placeholder='Search...'
                    onChange={handleInputChange}/>
                <Link to={`/search/${searchInput}`}>
                    <button type='submit' className='search btn btn-primary'>Search</button>
                </Link>
            </form>
        </div>
     );
}
 
export default SearchBar;