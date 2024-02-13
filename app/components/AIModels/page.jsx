// AIModelsSection.js
import Link from "next/link";
import Image from "next/image";

const AIModels = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:py-20 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* COLUMN-1 */}
        <div className="col-span-6 flex justify-center">
          <div className="flex flex-col align-middle justify-center p-10">
            <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">
              Unlock the Power of AI in Your Restaurant
            </p>
            <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
              Leverage advanced AI models tailored for your restaurant's success. Explore personalized menu recommendations and understand customer propensity for specific actions.
            </h4>
            <Link
              href="/"
              className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links"
            >
              Learn more{" "}
              <Image
                src="/assets/provide/arrow.svg"
                alt="arrow"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-1"></div>
        {/* COLUMN-2 */}
        <div className="col-span-6 lg:col-span-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl">
            {/* Menu Recommendation Model Card */}
            <Link
              href="/components/MenuModel"
              passHref
              className="bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl cursor-pointer transition duration-300 hover:shadow-2xl"
            >
              <div className="flex items-center mb-5">
                <Image
                  src="/assets/provide/arrow.svg"
                  alt="Menu Recommendation"
                  width={64}
                  height={64}
                />
              </div>
              <h4 className="text-2xl font-semibold">
                Check Menu Recommendation Model
              </h4>
              <p className="text-sm font-normal text-bluegray my-2">
                Explore personalized menu recommendations for your restaurant.
              </p>
            </Link>

            {/* Propensity Model Card */}
            <Link
              href="/"
              passHref
              className="bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl cursor-pointer transition duration-300 hover:shadow-2xl"
            >
              <div className="flex items-center mb-5">
                <Image
                  src="/assets/provide/arrow.svg"
                  alt="Propensity Model"
                  width={64}
                  height={64}
                />
              </div>
              <h4 className="text-2xl font-semibold">Check Propensity Model</h4>
              <p className="text-sm font-normal text-bluegray my-2">
                Understand customer propensity for specific actions.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIModels;
