const About = () => {
  return (
    <div className="pb-10 grid grid-cols-1 sm:grid-cols-2">
      <div className="">
        <div className="flex flex-row text-start ml-5 pt-[16px] font-bold text-3xl leading-normal lg:text-6xl lg:leading-normal bg-white stroke-b-1px lg:stroke-b-2px text-white">
          About
          <p className="pl-3 no-shadow text-black font-medium pb-2"> Us</p>
        </div>
        <p className="text-lg leading-8 text-gray-600 ml-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
          efficitur quam, et mattis ligula. Duis et quam venenatis mi porttitor
          iaculis eu eget justo. Nunc sed nisi vulputate, iaculis ipsum a,
          accumsan tortor. Nullam turpis ex, malesuada congue lectus posuere,
          pharetra commodo massa. Praesent neque nisi, mattis ac luctus.
        </p>
      </div>
    </div>
  );
};

export default About;
