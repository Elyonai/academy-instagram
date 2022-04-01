import React from "react";
import { Story, Meta } from "@storybook/react";
import CardItem from "../Feed/Card/CardItem";
import { Posts } from "../data/posts";

export default {
  title: "Feed/CardItem",
  component: CardItem,
} as Meta;

const Template: Story<Posts> = (args) => <CardItem {...args} />;

export const PostItem = Template.bind({});
PostItem.args = {
  profile: "FabianPark122",
  location: "Los Angeles, California",
  profileImg:
    "https://res.cloudinary.com/joeutd/image/upload/v1648059999/insta-clone-academy/profile/profile4_ybdvam.jpg",
  imgUrl:
    "https://res.cloudinary.com/joeutd/image/upload/v1647980750/insta-clone-academy/nature-3-tiny_paitpw.jpg",
  caption: "Great View",
  likes: "120,455",
  comments: [
    {
      profile: "KaylenB",
      profileImg:
        "https://res.cloudinary.com/joeutd/image/upload/v1648059999/insta-clone-academy/profile/profile3_mch6rq.jpg",
      text: "What a nice picture",
    },
    {
      profile: "Gina55",
      profileImg:
        "https://res.cloudinary.com/joeutd/image/upload/v1648060000/insta-clone-academy/profile/profile8_rijerm.jpg",
      text: "Amazing!!",
    },
  ],
};
