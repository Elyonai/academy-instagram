import { Photography } from "../components/Photo";

export default {
  title: "Components/Usuario",
  component: Photography,
};

const Template = (args) => <Photography {...args} />;

export const Fotos = Template.bind({});
Fotos.args = {
  userName: "Diana Ayala",
  date: "March 28, 2022",
  descriptionPhoto: "Hi",
  comment1: "Where it is?",
  comment2: "I love it!",
  comment3: "It's an amazing photo!",
  comment4: "See my dm",
  comment5: "Adorable",
};
