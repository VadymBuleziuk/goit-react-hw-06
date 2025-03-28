import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

export default function Contact({ contactsList: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.contact}>
      <div className={css.contactEl}>
        <h2>{name}</h2>
        <p>{number}</p>
      </div>
      <button className={css.contactBtn} onClick={handleDeleteContact}>
        Delete
      </button>
    </div>
  );
}
