import Image from "next/image";

interface whydata {
    heading: string;
    subheading: string;
}

const whydata: whydata[] = [
    {
        heading: "Data-Driven Insights",
        subheading: "Unlock actionable insights from 42 dashboards, covering 8 segments like Customer, Order, Finance, and more. Each dashboard provides a comprehensive view with 4 charts and 1 table."
    },
    {
        heading: "Advanced Management Tools",
        subheading: "Utilize role-based access control, order management, and inventory tools with customizable alerts. Manage Inventory Overview, Suppliers, and Costs seamlessly."
    },
    {
        heading: "Robust Data Security",
        subheading: "Benefit from our robust security measures and leak-proof pipeline. Implementing 60+ validation and cleaning rules ensures accurate and secure data."
    },
    {
        heading: "AI-Powered Recommendations",
        subheading: "Enhance decision-making with our menu recommendation and customer propensity models. Get personalized insights and understand customer preferences."
    }
]


const Why = () => {
    return (
        <div id="about">

            <div className='mx-auto max-w-7xl px-4 h-auto sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    {/* COLUMN-1 */}
                    <div className="lg:-ml-24">
                        <Image src="/assets/why/insights.svg" alt="iPad-image" width={1000} height={1000} />
                    </div>

                    {/* COLUMN-2 */}
                    <div>
                        <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">Why we best?</h3>
                        <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">Dont waste time on search manual tasks. Let Automation do it for you. Simplify workflows, reduce errors, and save time.</h4>

                        <div className="mt-10">
                            {whydata.map((items, i) => (
                                <div className="flex mt-4" key={i}>
                                    <div className="rounded-full h-10 w-12 flex items-center justify-center bg-circlebg">
                                        <Image src="/assets/why/check.svg" alt="check-image" width={24} height={24} />
                                    </div>
                                    <div className="ml-5">
                                        <h4 className="text-2xl font-semibold">{items.heading}</h4>
                                        <h5 className="text-lg text-beach font-normal mt-2">{items.subheading}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Why;
