import s from './Profile.module.css';
import PropTypes from 'prop-types';


export default function Profile(props) {

  const { avatar, username, tag, location, stats } = props;

  return <div className={s.Profile} >
    <div className={s.Description}>
    <img
        src={avatar}
        alt="User avatar"
        className={s.Avatar}
    />
      <p className={s.Name}>{username}</p>
      <p className={s.Tag}>@{tag}</p>
      <p className={s.Location}>{location}</p>
  </div>

    <ul className={s.Stats}>
    <li className={s.List}>
        <span className={s.Label}>Followers</span>
        <span className={s.Quantity}> {stats.followers}</span>
    </li>
    <li className={s.List}>
        <span className={s.Label}>Views</span>
        <span className={s.Quantity}> {stats.views}</span>
    </li>
    <li className={s.List}>
        <span className={s.Label}>Likes</span>
        <span className={s.Quantity}> {stats.likes}</span>
    </li>
  </ul>
</div>
  
}

Profile.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
}