import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Feed from '../Feed/Feed';
import UserInfoComponent from '../components/user-info/user-info';
import UserInfo from '../types/user-info';

const Router = function () {
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
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route
          path='/profile'
          element={
            <UserInfoComponent
              name={userInfo.name}
              lastName={userInfo.lastName}
              userName={userInfo.userName}
              publications={userInfo.publications}
              followers={userInfo.followers}
              follows={userInfo.follows}
              profileImg={userInfo.profileImg}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
