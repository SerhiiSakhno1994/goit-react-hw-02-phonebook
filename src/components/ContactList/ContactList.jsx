import PropTypes from 'prop-types';

import s from './ContactList.module.css';
import Button from '../Button/Button';

function ContactList({ contacts, onDeletContact }) {
  return (
    <ul className={s.container}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>{name} :</p>
          <p className={s.text}>{number}</p>
          {/* <button className={s.button} onClick={() => onDeletContact(id)}>
            Delete
          </button> */}
          <Button text="Delete" onClick={() => onDeletContact(id)} />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeletContact: PropTypes.func.isRequired,
};

export default ContactList;