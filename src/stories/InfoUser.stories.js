import UserInfo from "../components/user-info/user-info";

export default {
  title: "Components/Usuario",
  component: UserInfo,
};

const Template = (args) => <UserInfo {...args} />;

export const Info = Template.bind({});
Info.args = {
    name: 'Diana',
    lastName: 'Ayala',
    userName: 'diahna_ayala',
    publications: 1,
    followers: 407,
    follows: 65,
    profileImg: 'https://images.pexels.com/photos/2853129/pexels-photo-2853129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
};
