import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

export default function ContactForm() {
  const dispatch = useDispatch();
  const UserScheme = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required!"),
    number: Yup.string()
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        "Phone number must be in the format ***-**-**"
      )
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required!"),
  });
  const formSubmit = (value) => {
    dispatch(addContact(value));
  };
  return (
    <Formik
      validationSchema={UserScheme}
      initialValues={{ name: "", number: "" }}
      onSubmit={formSubmit}
    >
      <Form className={css.form}>
        <label htmlFor="">Name</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" />
        <label htmlFor="">Number</label>
        <Field type="text" name="number" />
        <ErrorMessage name="number" />
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
