import UserInfoComponent from './components/user-info/user-info';
import './App.scss';

import { UserInfo } from './types/user-info';
const urlImage =
  'https://img2.freepng.es/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg';

const userInfo: UserInfo = {
  name: 'Elyonai',
  lastName: 'Hernandez',
  userName: 'elyolml',
  publications: 231,
  followers: 134,
  follows: 294,
  profileImg: urlImage,
};

function App() {
  return (
    <div className='App'>
      <UserInfoComponent
        name={userInfo.name}
        lastName={userInfo.lastName}
        userName={userInfo.userName}
        publications={userInfo.publications}
        followers={userInfo.followers}
        follows={userInfo.follows}
        profileImg={userInfo.profileImg}
      />
    </div>
  );
}

export default App;
