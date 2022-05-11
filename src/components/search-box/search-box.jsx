import './search-box.styles.css'

const SearchBox = (props) => {
    console.log(props)
    return (
        <input
            className='search-box'
            type='search'
            placeholder='Buscar...'
            onChange={props.onSearchChange} 
        />
    )
}

export default SearchBox
