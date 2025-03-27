import css from "./Contact.module.css";

export default function Contact({
  contactsList: { id, name, number },
  deleteUser,
}) {
  const deleteContact = () => {
    deleteUser(id);
  };
  return (
    <div className={css.contact}>
      <div className={css.contactEl}>
        <h2>{name}</h2>
        <p>{number}</p>
      </div>
      <button className={css.contactBtn} onClick={deleteContact}>
        Delete
      </button>
    </div>
  );
}
