import React from 'react'

const NewsUpdates = () => {
  return (
    <div className='text-center mt-10'>
        
        {/* heading */}
        <div>
            <h1 className="text-4xl font-bold relative mb-12">
            News Updates
                <svg
                className="absolute  left-1/2 -translate-x-1/2"
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="20"
                viewBox="0 0 200 20"
                fill="none"
                >
                <path
                    d="M10 15 Q100 0 190 15"
                    stroke="#FFD700"
                    strokeWidth="4"
                    fill= "none"
                />
                </svg>
            </h1>
        </div>

        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* card 1 */}
                <div className="bg-white border-2 border-gray-400 rounded-lg shadow-lg p-4 m-5">
                    {/* img div  */}
                    <div className="h-40">
                        <img src="https://newsroompost.com/wp-content/uploads/2024/09/Border-Gavaskar-2024.jpg" alt="news" className="shadow-lg w-full h-full object-cover rounded-lg"/>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-lg font-bold">Ind VS Aus 2024</h1>
                        <p className="text-md text-gray-600">Cummins,boland stars as Austrlia steal the show | Takes 2-1 lead</p>
                        <p className='text-sm mt-2 text-gray-400'>Tap to read more</p>
                    </div>
                </div>

                {/* card 2 */}
                <div className="bg-white rounded-lg shadow-lg p-4 border-2  border-gray-400 m-5">
                    <div className="h-40">
                        <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_800,q_50/lsci/db/PICTURES/CMS/393800/393824.jpg" alt="news" className="w-full h-full object-contain shadow-lg  rounded-lg"/>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-lg font-bold">Rohit Sharms has his say</h1>
                        <p className="text-md text-gray-600">It’s about Rishabh Pant figuring out what is the right way: Rohit Sharma</p>
                        <p className='text-sm mt-2 text-gray-400'>Tap to read more</p>
                    </div>
                </div>

                {/* card 3 */}
                <div className="bg-white rounded-lg shadow-lg border-2  border-gray-400 p-4 m-5">
                    <div className="h-40">
                        <img src="https://static.toiimg.com/thumb/msid-116770432,width-1280,height-720,resizemode-4/116770432.jpg" alt="news" className="w-full h-full object-cover shadow-lg  rounded-lg"/>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-lg font-bold">Proteas book lord's finals ticket</h1>
                        <p className="text-md text-gray-600">South Africa win a nail biting encounter against Pak as they qualify for the....</p>
                        <p className='text-sm mt-2 text-gray-400'>Tap to read more</p>
                    </div>
                </div>
                </div>
            
        </div>

    </div>
  )
}

export default NewsUpdates
