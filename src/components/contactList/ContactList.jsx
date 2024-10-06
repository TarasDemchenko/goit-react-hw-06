import { useDispatch, useSelector } from "react-redux";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const ContactList = () => {
  const { items, loading, error } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error</h2>}
      <ul className={css.con_list}>
        {items.map(({ id, name, number }) => (
          <Contact
            key={id}
            name={name}
            number={number}
            onDelete={() => dispatch(deleteContact(id))}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
