import logo from './logo.svg';
import './App.css';
import FullName from './profile/FullName';
import ProfilePhoto from './profile/ProfilePhoto';
import Address from './profile/Address';

function App() {
  return (
    <div className="App">
     <FullName></FullName>
     <ProfilePhoto></ProfilePhoto>
     <Address></Address>
    </div>
  );
}

export default App;
