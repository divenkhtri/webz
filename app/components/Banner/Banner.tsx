import Image from "next/image";
import Link from "next/link";
const Banner = () => {
  return (
    <main>
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
          <div className="text-center">
            <h1 className="text-5xl font-semibold text-navyblue sm:text-5xl lg:text-5xl md:4px">
              Elevate Your Restaurant&apos;s Performance
              <br /> with MenuWise Analytics.
            </h1>
            <p className="mt-6 text-lg leading-8 text-bluegray">
              Unleash the power of data with MenuWise, the comprehensive
              analytics platform designed specifically for the restaurant
              industry. Gain deep insights into Customer, Order, Finance,
              Marketing, Transactions, and Payments, all in one integrated
              solution.
            </p>
          </div>

          <div className="text-center mt-5">
            <Link href="/components/exploreInsights">
              <button className="text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton">
                Explore Our Insights
              </button>
            </Link>
            <Link href="/components/learnMore">
              <button className="text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton">
                Learn More
              </button>
            </Link>
          </div>

          <Image
            src={"/assets/banner/dashboard.svg"}
            alt="banner-image"
            width={1200}
            height={598}
          />
        </div>
      </div>
    </main>
  );
};

export default Banner;
