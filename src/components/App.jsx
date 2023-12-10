import Contacts from './Contacts/Contacts';
import GlobalStyles from './GlobalStyles';
import Phonebook from './Phonebook/Phonebook';

const App = () => {
  return (
    <div
      style={{
        textAlign: 'start',
        padding: '50px',
      }}
    >
      <Phonebook />
      <Contacts />
      <GlobalStyles />
    </div>
  );
};

export default App;
