import Stories from "../components/stories";

export default {
  title: "Components/Feed",
  component: Stories,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Stories {...args} />;

export const Historias = Template.bind({});
Historias.args = {
  skin: "snapgram", 
  avatars: true, 
  list: false, 
  openEffect: true, 
  cubeEffect: false, 
  autoFullScreen: true, 
  backButton: false, 
  backNative: false, 
  previousTap: true, 
  localStorage: false, 
  reactive: true,
};
