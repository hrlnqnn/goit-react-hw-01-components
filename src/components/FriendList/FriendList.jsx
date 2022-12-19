import { FriendListItem } from 'components/FriendList/FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => (
    <ul className={css.friendsList}>
        {friends.length > 0 &&
            friends.map(({ id, ...friendData }) => (
                <FriendListItem key={id} friend={friendData} />
            ))}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};