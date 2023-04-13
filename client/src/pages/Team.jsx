import React from "react";
import PeopleGrid from "../components/Team/PeopleGrid";
const Team = () => {
  const DATA = [
    {
      fullName: "Abhishek Nandy",
      bio: "",
      profilePicture:
        "https://gdgcloud.kolkata.dev/ccd2023/images/team/Abhishek%20Nandy.jpg",
      links: [
        {
          title: "LinkedIn",
          url: "https://www.linkedin.com/in/abhishek-nandy/",
        },
      ],
    },
    {
      fullName: "Anubhav Singh",
      bio: "",
      profilePicture:
        "https://gdgcloud.kolkata.dev/ccd2023/images/team/Anubhav%20Singh.jpg",
      links: [
        {
          title: "Twitter",
          url: "https://twitter.com/xprilion",
        },
        {
          title: "LinkedIn",
          url: "https://www.linkedin.com/in/xprilion",
        },
        {
          title: "Github",
          url: "https://github.com/xprilion",
        },
        {
          title: "Facebook",
          url: "https://fb.com/xprilion",
        },
        {
          title: "Instagram",
          url: "https://ig.me/xprilion",
        },
      ],
    },
    {
      fullName: "Jyoti Mishra",
      bio: "",
      profilePicture: "https://github.com/jstjyoti.png",
      links: [
        {
          title: "Twitter",
          url: "https://twitter.com/Jyoti_Mi",
        },
        {
          title: "LinkedIn",
          url: "https://www.linkedin.com/in/jyotim29/",
        },
        {
          title: "Github",
          url: "https://github.com/jstjyoti",
        },
        {
          title: "Instagram",
          url: "https://www.instagram.com/whereisjyoti/",
        },
      ],
    },
    {
      fullName: "Kazi Haque",
      bio: "",
      profilePicture:
        "https://gdgcloud.kolkata.dev/ccd2023/images/team/Kazi%20Haque.jpg",
      links: [
        {
          title: "LinkedIn",
          url: "https://www.linkedin.com/in/haquekazi/",
        },
      ],
    },
    {
      fullName: "Md Nasirul Haque",
      bio: "",
      profilePicture:
        "https://gdgcloud.kolkata.dev/ccd2023/images/team/Md%20Nasirul%20Haque.jpg",
      links: [
        {
          title: "Twitter",
          url: "https://twitter.com/mdnasirulhaque",
        },
        {
          title: "LinkedIn",
          url: "https://www.linkedin.com/in/mdnasirulhaque",
        },
        {
          title: "Github",
          url: "https://github.com/lurisan",
        },
        {
          title: "Instagram",
          url: "https://www.instagram.com/md_nasirul_haque",
        },
        {
          title: "Facebook",
          url: "https://www.facebook.com/lurisan.euqah",
        },
      ],
    },
    {
      fullName: "Snehangshu Bhattacharya",
      bio: "",
      profilePicture:
        "https://gdgcloud.kolkata.dev/ccd2023/images/team/Snehangshu%20Bhattacharya.jpg",
      links: [
        {
          title: "Twitter",
          url: "https://twitter.com/snehangshu_",
        },
        {
          title: "LinkedIn",
          url: "https://www.linkedin.com/in/snehangshu-bhattacharya-3891b5153/",
        },
        {
          title: "Github",
          url: "https://github.com/forkbomb-666",
        },
        {
          title: "Instagram",
          url: "https://www.instagram.com/snehangshu_b/",
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl overflow-x-hidden mx-auto mt-4 space-y-4 mb-10">
      <div className="flex flex-row  justify-center ml-5 pt-[16px] lg:pl-32 lg:pr-32 font-bold text-3xl leading-normal lg:text-6xl lg:leading-normal bg-white stroke-b-1px lg:stroke-b-2px text-white">
        Organizing
        <p className="pl-3 no-shadow text-black font-medium pb-2  items-center align-center">
          {" "}
          Team
        </p>
      </div>
      <div
        className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 grid-flow-row place-items-center gap-4 max-w-7xl mx-auto"
        id="speakers-grid"
      >
        {DATA.map((data) => {
          return (
            <PeopleGrid
              fullName={data.fullName}
              bio={data.bio}
              profilePicture={data.profilePicture}
              links={data.links}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Team;
