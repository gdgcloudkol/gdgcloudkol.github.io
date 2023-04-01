import { FC } from "react"

const Event: FC<any> = ({ name }) => {
    return (
        < >
            <div className=" w-full text-center py-10">
                <div className=" text-5xl font-bold "><span className=" opacity-100 stroke-b-1px text-white   " >{name}</span> Events</div>
                <div className="py-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore e</div>
                <div className="flex gap-x-5 items-center justify-center ">
                    {
                        [1, 2, 3, 4].map(() => {
                            return (
                                <div className=" border  w-64 rounded-2xl flex items-center flex-col">
                                    <img className="   h-36 w-fit " src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/Kotlin-DSC-Promo-Event-Page-Thumbnail-R2-NAVY.jpeg" alt="" />
                                    <div className=" h-full w-full top-10 ">
                                        <div className="py-2">Android Study Jam</div>
                                        <p className=" text-sm p-5 px-8 text-center">Android Study Jams are community-organized study groups for people to learn how to build Android apps, using the curriculum provided by Google.</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Event