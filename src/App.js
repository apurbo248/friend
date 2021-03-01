
import './App.css';
import SelectUser from './Components/SelectUser/SelectUser';
import Header from './Components/UserInfo/Header/Header';
import UserPage from './Components/UserPage/UserPage';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Header></Header>
      <UserPage></UserPage>
      <SelectUser></SelectUser>
    </div>
   );
}

export default App;
