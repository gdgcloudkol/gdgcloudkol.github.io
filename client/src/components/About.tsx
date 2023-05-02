const About = () => {
  return (
    <section
      className="md:px-14 lg:px-20 px-2 md:space-y-10 lg:space-y-20 space-y-5"
      id="about"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="">
          <h2 className="flex flex-row text-start font-bold text-3xl leading-normal lg:text-6xl lg:leading-normal bg-white stroke-b-1px lg:stroke-b-2px text-white">
            About
            <span className="no-shadow text-black font-medium">&nbsp;Us</span>
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
            efficitur quam, et mattis ligula. Duis et quam venenatis mi
            porttitor iaculis eu eget justo. Nunc sed nisi vulputate, iaculis
            ipsum a, accumsan tortor. Nullam turpis ex, malesuada congue lectus
            posuere, pharetra commodo massa. Praesent neque nisi, mattis ac
            luctus.
          </p>
        </div>
      </div>
      <div className="bg-gray-100 rounded-3xl bg-no-repeat bg-left-top bg-cover py-10 flex flex-col justify-center items-center">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-between">
            <div className="px-4 mb-8">
              <div className=" rounded-lg p-6">
                <h3 className="text-4xl font-bold mb-4 stroke-b-1px lg:stroke-b-2px text-white flex flex-row flex-wrap">
                  Who are <span className="text-black">&nbsp;we?</span>
                </h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus aliquam leo sit amet semper lacinia. Ut non quam sed
                  tortor eleifend consectetur sed nec dolor.
                </p>
              </div>
            </div>
            <div className="px-4 mb-8">
              <div className=" rounded-lg p-6">
                <h2 className="text-4xl font-bold mb-4">Connect</h2>
                <p className="text-gray-700">
                  Fusce nec odio in sapien venenatis eleifend. Donec euismod
                  ullamcorper felis a rutrum. Aliquam vel ultricies turpis.
                </p>
              </div>
            </div>
            <div className="px-4 mb-8">
              <div className=" rounded-lg p-6">
                <h2 className="text-4xl font-bold mb-4">Learn</h2>
                <p className="text-gray-700">
                  Vestibulum ultricies lobortis libero, eget bibendum massa.
                  Proin at faucibus ligula, nec sollicitudin augue. Pellentesque
                  vel pharetra odio.
                </p>
              </div>
            </div>
            <div className="px-4 mb-8">
              <div className=" rounded-lg p-6">
                <h2 className="text-4xl font-bold mb-4">Growth</h2>
                <p className="text-gray-700">
                  Quisque eget massa in sapien feugiat mattis eget eu odio.
                  Aenean non odio et leo feugiat imperdiet eu vel turpis. Etiam
                  vestibulum dolor et diam hendrerit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-wrap items-center gap-4">
          <a
            type="button"
            href="#!"
            className=" border-2 border-[#596272] rounded-full px-6 lg:px-8 py-2 text-gray-700 text-sm font-medium hover:text-gray-900"
          >
            Web
          </a>
          <a
            type="button"
            href="#!"
            className=" border-2 border-[#596272] rounded-full px-6 lg:px-8 py-2 text-gray-700 text-sm font-medium hover:text-gray-900"
          >
            Firebase
          </a>
          <a
            type="button"
            href="#!"
            className=" border-2 border-[#596272] rounded-full px-6 lg:px-8 py-2 text-gray-700 text-sm font-medium hover:text-gray-900"
          >
            Cloud
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
