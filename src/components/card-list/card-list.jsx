import Card from '../card/card'
import './card-list.styles.css'

const CardList = ({ users }) => {
	return (
		<div className='card-list'>
			{users.map(user =>
				{
					return <Card key={user.id} user={user} />
				}
			)}
		</div>
	)
}

export default CardList
