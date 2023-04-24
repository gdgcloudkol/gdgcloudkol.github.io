const About = () => {
  return (
    <>
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
      <div className="bg-gray-100 rounded-[20px] bg-no-repeat bg-left-top mx-4 lg:mx-10 bg-cover py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/4 px-4 mb-8">
              <div className=" rounded-lg p-6">
                <div className=" text-4xl font-bold mb-4 stroke-b-1px lg:stroke-b-2px text text-white flex flex-row">Who are <span className="text-black no-shadow"> &nbsp;we?</span></div>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam leo sit amet semper lacinia. Ut non quam sed tortor eleifend consectetur sed nec dolor.</p>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-8">
              <div className=" rounded-lg p-6">
                <h2 className="text-4xl font-bold mb-4">Connect</h2>
                <p className="text-gray-700">Fusce nec odio in sapien venenatis eleifend. Donec euismod ullamcorper felis a rutrum. Aliquam vel ultricies turpis.</p>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-8">
              <div className=" rounded-lg p-6">
                <h2 className="text-4xl font-bold mb-4">Learn</h2>
                <p className="text-gray-700">Vestibulum ultricies lobortis libero, eget bibendum massa. Proin at faucibus ligula, nec sollicitudin augue. Pellentesque vel pharetra odio.</p>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-8">
              <div className=" rounded-lg p-6">
                <h2 className="text-4xl font-bold mb-4">Growth</h2>
                <p className="text-gray-700">Quisque eget massa in sapien feugiat mattis eget eu odio. Aenean non odio et leo feugiat imperdiet eu vel turpis. Etiam vestibulum dolor et diam hendrerit.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className=" border-2 border-[#596272] rounded-full px-6 lg:px-8 py-2 mr-4">
            <a href="#" className="text-gray-700 text-sm font-medium hover:text-gray-900">Web</a>
          </div>
          <div className="border-2 border-[#596272]  rounded-full px-6 lg:px-8 py-2 mr-4">
            <a href="#" className="text-gray-700 text-sm font-medium hover:text-gray-900">Firebase</a>
          </div>
          <div className="border-2 border-[#596272]  rounded-full px-6 lg:px-8 py-2 mr-4">
            <a href="#" className="text-gray-700 text-sm lg:font-medium hover:text-gray-900">Cloud</a>
          </div>
        </div>
      </div>

    </>
  );
};

export default About;
