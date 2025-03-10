import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { useEffect } from "react";
import { fetchData } from "../../redux/contactsOps";
import {
  selectContacts,
  selectFilteredContacts,
} from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import s from "./Contact.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const contactsData = useSelector(selectContacts);
  const filteredContacts = useSelector(selectNameFilter);
  const filtered = useSelector(selectFilteredContacts);

  if (!contactsData || contactsData.length === 0) {
    return <p>No contacts found.</p>; // Заглушка, якщо масив порожній
  }
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <div>
      <ul className={s.contactList}>
        {filtered.map((contact) => (
          <li className={s.contactCard} key={contact.id}>
            {contact.name} : {contact.number}
            <button
              className={s.deleteButton}
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
