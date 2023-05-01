import './SearchBar.css'
import useCustomForm from '../../hooks/useCustomForm';
import { useNavigate } from 'react-router-dom';

const SearchBar = (props) => {
    const [formData, handleSubmit, handleInputChange] = useCustomForm();
    const navigate = useNavigate();

    return ( 
        <div>
            <form className='searchBar-form' onSubmit={handleSubmit}>
                <input
                    type= 'text'
                    value={formData.searchInput}
                    className='searchInput'
                    placeholder='Search...'
                    onChange={handleInputChange}
                    required={true}/>
                    <button onClick={() => navigate(`/search/${formData.searchInput}`)}>Search</button>
            </form>
        </div>
     );
}
 
export default SearchBar;