import './card-list.styles.css'

const CardList = ({ users }) => {
    return (
        <div className='card-list'>
            {users.map(user =>
                {
                    const { id, name, email } = user

                    return (
                    <div key={id} className='card-container'>
                        <img alt={`user ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </div>

                    )
                }
            )}
        </div>
    )
}

export default CardList
