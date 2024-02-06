import Image from "next/image";

interface NetworkData {
    imgSrc: string;
    region: string;
    description: string;
}

const networkData: NetworkData[] = [
    {
        imgSrc: "/assets/network/indian.svg",
        region: "India",
        description: "Collaboration with restaurant owners, tech enthusiasts, and innovators in the dynamic restaurant industry landscape."
    },
    {
        imgSrc: "/assets/network/america.svg",
        region: "United States",
        description: "Engagement with restaurant industry professionals, technology enthusiasts, and innovators, fostering growth and collaboration."
    },
];
 
const Network = () => {
    return (
        <div className="bg-babyblue" id="project">
            <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-4xl sm:text-6xl font-semibold text-center my-10 lh-81">Explore Our Global Network<br />and Collaborative Efforts.</h3>

                <Image src={'/assets/network/map.png'} alt={"map-image"} width={1400} height={800} />

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-4 lg:gap-x-8'>
                    {networkData.map((item, index) => (
                        <div key={index} className='bg-white rounded-2xl p-5 shadow-xl'>
                            <div className="flex justify-start items-center gap-2">
                                <Image src={item.imgSrc} alt={item.imgSrc} width={55} height={55} className="mb-2" />
                                <h4 className="text-xl font-medium text-midnightblue">{item.region}</h4>
                            </div>
                            <hr />
                            <p className='text-sm font-normal text-bluegrey my-2'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Network;
