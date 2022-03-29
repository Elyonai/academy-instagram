import ImgProfile from "../componets/ImgProfile";

export default {
  title: "Components/Feed",
  component: ImgProfile,
};

const Template = (args) => <ImgProfile {...args} />;

export const Sugerencias = Template.bind({});
Sugerencias.args = {
  margin: "auto",
  display: "block",
  maxWidth: "50%",
  maxHeight: "100%",
  backgroundColor: "white",
  margin: "auto",
  maxWidth: 300,
  flexGrow: 3,
  boxShadow: 0,
};
