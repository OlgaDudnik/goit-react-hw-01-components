import propTypes from 'prop-types';
import styles from './styles.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className={styles.item} key={id}>
        <span className={isOnline ? styles.status : styles.disabled}>
          {isOnline}
        </span>
        <img
          className={styles.avatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      avatar: propTypes.string,
      name: propTypes.string,
      id: propTypes.number,
      isOnline: propTypes.bool,
    }).isRequired
  ),
};

export { FriendList };
