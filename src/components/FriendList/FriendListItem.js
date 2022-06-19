import PropTypes from 'prop-types';
import s from './FriendList.module.css';
export default function FriendListItem(props) {
    
    const { isOnline, avatar, name, id } = props;
    return <li className={s.Item}>{id}
        {isOnline ? <span className={s.StatusGreen}></span> : <span className={s.StatusRed}></span>}
                <img className={s.Avatar} src={avatar} alt="User avatar" width="48" />
                <p className={s.Name}>{name}</p>
            </li>
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
}