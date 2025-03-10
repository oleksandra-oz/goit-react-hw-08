// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ name, number, id }) => {
  // const dispatch = useDispatch();
  // const handleDelete = () => {
  //   dispatch(deleteContact(id));
  // };
  return (
    <div>
      <ul>
        <li>
          <strong>Name:</strong> {name}
        </li>
        <li>
          <strong>Number:</strong> {number}
        </li>
      </ul>
    </div>
  );
};

export default Contact;
