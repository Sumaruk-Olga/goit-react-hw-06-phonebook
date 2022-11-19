import { useDispatch, useSelector } from "react-redux";
import { toggleCompleted } from "redux/contactsSlice";
import { getTasks } from "redux/selectors";


const App = () => {
  const value = useSelector(getTasks).contacts;
  // console.log('value', value);  
  const dispatch = useDispatch();
  
  return (
    <div>
      <ol>
        {value && value.map(item=>{          
           return ( 
             <li key={item.id}> 
               <button type="button" onClick={()=>dispatch(toggleCompleted(item.id))}>{item.text}</button> 
               {item.completed && <span>   done</span>} 
             </li> 
           ) 
         })} 
      </ol>
    </div>
  );
};

export default App;


//-------------------------------------

// import { useEffect, useState, useRef } from 'react';
// import { PageTitle } from 'components/PageTitle/PageTitle.styled';
// import { Container, SectionTitle } from './App.styled';
// import { Contacts } from 'components/Contacts/Contacts';
// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { Filter } from 'components/Filter/Filter';

// const LS_KEY = 'contacts';

// export function App() {
//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState('');
//   const initialValues = useRef(true);

//   useEffect(() => {   
//     if (initialValues.current) {      
//       if (JSON.parse(localStorage.getItem(LS_KEY))) { setContacts(JSON.parse(localStorage.getItem(LS_KEY))) }
//       initialValues.current = false;
//       return;
//     } 
//   }, []);

//   useEffect(() => { 
//     if (!initialValues.current) {
//       localStorage.setItem(LS_KEY, JSON.stringify(contacts));
//     }
//   }, [contacts]);

//   const handleSubmit = (obj) => {
//     setContacts(prevContacts => [...prevContacts, obj])
//   }

//   const isNamePresent = (name) => {
//     const normalizedName = name.toLowerCase();
//     return contacts.find(item => item.name.toLowerCase() === normalizedName);
//   }

//   const handleDeleteContact = (id) => {
//     setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
//   }

//   const changeFilter = e => {
//     setFilter(e.currentTarget.value);
//   }

//   const getVisibleContacts = () => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(item => item.name.toLowerCase().includes(normalizedFilter));
//   };

//   return (<>
//     <PageTitle>goit react hw 03 phonebook</PageTitle>
//     <Container>
//       <SectionTitle>Phonebook</SectionTitle>
//       <ContactForm onSubmit={handleSubmit} isNamePresent={isNamePresent} />
//       <Filter value={filter} onChange={changeFilter} />
//       <SectionTitle>Contacts</SectionTitle>
//       <Contacts contacts={getVisibleContacts()} onDelete={handleDeleteContact} />
//     </Container>
//   </>
//   );
// }