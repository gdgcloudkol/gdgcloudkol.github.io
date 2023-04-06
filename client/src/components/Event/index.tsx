import studyjam from "../../assets/img/studyJam.jpg"
const Event = ({ name, bg }: any) => {
    return (
        < >
            <div className={` flex flex-col md:px-14 lg:px-20 w-full ${bg && "bg-black text-white"} text-center py-10`}>
                <div className=" text-5xl font-bold "><span className={`opacity-100 ${bg ? "stroke-w-1px text-black" : " stroke-b-1px text-white"}`} >{name}</span>{name === "Our" ? " Partners" : " Events"}</div>
                <div className="py-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore e</div>
                <div
                    className="flex overflow-x-scroll lg:justify-center pb-10 "
                >
                    <div
                        className="flex flex-nowrap items-center "
                    >
                        {
                            [1, 2, 3, 4].map((i) => {
                                return (
                                    <div key={i} className={`inline-block px-3`}>
                                        <div
                                            className={` ${bg && "bg-white text-black"} w-64 h-full max-w-xs overflow-hidden rounded-2xl shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out`}
                                        >
                                            <picture>
                                                <img className="  bg-cover h-[130px] w-full rounded-tr-2xl rounded-tl-2xl" src={studyjam} alt="" />
                                            </picture>
                                            <div className="  w-full z-50 flex justify-between h-full flex-col py-5 top-52 ">
                                                <div className="py-4 lg:px-2 text-xl">Android Study Jam</div>
                                                <p className=" text-sm lg:text-xs px-8 pt-2 pb-10 text-center">Android Study Jams are community-organized study groups for people to learn how to build Android apps, using the curriculum provided by Google.</p>
                                                <a className="text-blue-600 bottom-0 relative" href="">Learn more</a>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Event