import PropTypes from 'prop-types';
import s from './FriendsListItem.module.css'


export default function FriendsItem ({avatar, name, isOnline}) {
    return (
        <li className ={s.item}>
            {isOnline ? <span className={s.status} style={{ backgroundColor: 'red' }}></span> : <span className={s.status} style={{ backgroundColor: 'grey' }}></span>}
            <img className ={s.avatar} src ={avatar} alt={name} width = "35"></img>
            <p className ={s.name}>{name}</p>
        </li>
    )
}

FriendsItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}