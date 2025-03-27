import Contact from "../Contact/Contact";
import css from "./ContactLIst.module.css";

export default function ContactList({ allUsers, deleteUser }) {
  return (
    <ul className={css.contacts}>
      {allUsers.map((user) => (
        <li className={css.el} key={user.id}>
          <Contact contactsList={user} deleteUser={deleteUser} />
        </li>
      ))}
    </ul>
  );
}
