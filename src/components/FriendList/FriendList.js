import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";

export default function FriendList(props) {

    const { friends } = props;
    return <ul className="friend-list"> 
        {friends.map(friend => (
            <FriendListItem
                isOnline={friend.isOnline}
                avatar={friend.avatar}
                name={friend.name}
                key={friend.id}
            />))}
    </ul>
}

FriendList.propTypes = {
    friends: PropTypes.array,
}