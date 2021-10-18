import FriendsItem from './FriendsListItem/FriendsListItem';
import s from './FriendsList.module.css';


export default function FriendsList({friends}) {
    return (
        <ul className ={s.friendsList}>
            {friends.map(friend => (
                <FriendsItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            )
            )}
        </ul>
    )
}