import { render, screen, fireEvent } from "@testing-library/react";
import CardItem from "../Posts/CardItem";
import React from "react";

const post = {
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

describe("CardItem", () => {
  describe("should render same text passed into props", () => {
    test("Should render username", async () => {
      render(
        <CardItem
          profile={post.profile}
          profileImg={post.profileImg}
          location={post.location}
          imgUrl={post.imgUrl}
          caption={post.caption}
          likes={post.likes}
          comments={post.comments}
        />
      );
      const userName = await screen.findAllByText(/FabianPark122/i);
      // const location = screen.getByText(/California/i);
      expect(userName.length).toBe(2);
      // expect(location).toBeInTheDocument();
    });
    test("Should render profile image", async () => {
      render(
        <CardItem
          profile={post.profile}
          profileImg={post.profileImg}
          location={post.location}
          imgUrl={post.imgUrl}
          caption={post.caption}
          likes={post.likes}
          comments={post.comments}
        />
      );
      const displayedImage = document.querySelector("img") as HTMLImageElement;
      expect(displayedImage.src).toBe(post.profileImg);
    });
    test("Should render location", async () => {
      render(
        <CardItem
          profile={post.profile}
          profileImg={post.profileImg}
          location={post.location}
          imgUrl={post.imgUrl}
          caption={post.caption}
          likes={post.likes}
          comments={post.comments}
        />
      );
      const location = screen.getByText(/california/i);
      expect(location).toBeInTheDocument();
    });
    test("Should render likes", async () => {
      render(
        <CardItem
          profile={post.profile}
          profileImg={post.profileImg}
          location={post.location}
          imgUrl={post.imgUrl}
          caption={post.caption}
          likes={post.likes}
          comments={post.comments}
        />
      );
      const likes = screen.getByText(/120,455/i);
      expect(likes).toBeInTheDocument();
    });
    test("should be able to type into comment input", async () => {
      render(
        <CardItem
          profile={post.profile}
          profileImg={post.profileImg}
          location={post.location}
          imgUrl={post.imgUrl}
          caption={post.caption}
          likes={post.likes}
          comments={post.comments}
        />
      );
      const inputElement = screen.getByRole("textbox", {
        name: "input-with-icon-textfield",
      });

      fireEvent.click(inputElement);
      fireEvent.change(inputElement, {
        target: { value: "Nice picture" },
      });
      expect(inputElement).toHaveValue("Nice picture");
    });
    test("should have empty input when Post button is clicked", async () => {
      render(
        <CardItem
          profile={post.profile}
          profileImg={post.profileImg}
          location={post.location}
          imgUrl={post.imgUrl}
          caption={post.caption}
          likes={post.likes}
          comments={post.comments}
        />
      );
      const inputElement = screen.getByRole("textbox", {
        name: "input-with-icon-textfield",
      });

      fireEvent.click(inputElement);
      fireEvent.change(inputElement, {
        target: { value: "Nice picture" },
      });
      const buttonElement = screen.getByRole("button", { name: /Post/i });
      fireEvent.click(buttonElement);
      expect(inputElement).toHaveValue("");
    });
  });
});
