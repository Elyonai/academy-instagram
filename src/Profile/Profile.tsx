import React from "react";
import UserInfoComponent from "../components/user-info/user-info";
import UserInfo from "../types/user-info";
import Navigation from "../components/Navigation";
import { Photo, Photography } from "../components/Photo";
import Publications from "../components/Publications";

const Profile = () => {
  const urlImage =
    "https://img2.freepng.es/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg";
  const userInfo: UserInfo = {
    name: "Elyonai",
    lastName: "Hernandez",
    userName: "elyolml",
    publications: 231,
    followers: 134,
    follows: 294,
    profileImg: urlImage,
  };
  return (
    <>
      <UserInfoComponent
        name={userInfo.name}
        lastName={userInfo.lastName}
        userName={userInfo.userName}
        publications={userInfo.publications}
        followers={userInfo.followers}
        follows={userInfo.follows}
        profileImg={userInfo.profileImg}
      />
      <div>
        <Navigation />
        <Publications />
        <Photography />
        <Photo />
      </div>
    </>
  );
};

export default Profile;
