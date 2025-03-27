import css from "./SearchBox.module.css";

export default function SearchBox({ filterContacts }) {
  const filter = (event) => {
    filterContacts(event.target.value);
  };
  return (
    <div className={css.filter}>
      <label htmlFor="">Find contacts by name</label>
      <input type="text" onChange={filter} />
    </div>
  );
}
