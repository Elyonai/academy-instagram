export interface Comment {
  profile: string;
  profileImg: string;
  text: string;
}
export interface Posts {
  profile: string;
  profileImg: string;
  location: string;
  imgUrl: string;
  caption: string;
  likes: string;
  comments: Comment[];
}
export const posts: Posts[] = [
  {
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
  },
  {
    profile: "Adriana_Ramos008",
    location: "Santa Monica,C.A.",
    profileImg:
      "https://res.cloudinary.com/joeutd/image/upload/v1648059998/insta-clone-academy/profile/profile5_lixplk.jpg",
    imgUrl:
      "https://res.cloudinary.com/joeutd/image/upload/v1647980740/insta-clone-academy/nature-2-tiny_zopwxj.jpg",
    caption: "This was such a nice trip",
    likes: "2,678,455",
    comments: [
      {
        profile: "Gina55",
        profileImg:
          "https://res.cloudinary.com/joeutd/image/upload/v1648060000/insta-clone-academy/profile/profile8_rijerm.jpg",
        text: "The weather looks great",
      },
      {
        profile: "FabianPark122",
        profileImg:
          "https://res.cloudinary.com/joeutd/image/upload/v1648059999/insta-clone-academy/profile/profile4_ybdvam.jpg",
        text: "Looks fun!",
      },
    ],
  },
  {
    profile: "Freddy_Mo32",
    location: "Zion National Park",
    profileImg:
      "https://res.cloudinary.com/joeutd/image/upload/v1648059998/insta-clone-academy/profile/profile2_ejxyor.jpg",
    imgUrl:
      "https://res.cloudinary.com/joeutd/image/upload/v1647980726/insta-clone-academy/nature-1-tiny_g8lpnh.jpg",
    caption: "Had so much fun that day",
    likes: "12,455",
    comments: [
      {
        profile: "Gina55",
        profileImg:
          "https://res.cloudinary.com/joeutd/image/upload/v1648060000/insta-clone-academy/profile/profile8_rijerm.jpg",
        text: "Beautiful!!",
      },
      {
        profile: "Adriana_Ramos008",
        profileImg:
          "https://res.cloudinary.com/joeutd/image/upload/v1648059998/insta-clone-academy/profile/profile5_lixplk.jpg",
        text: "What a nice picture",
      },
    ],
  },
];
