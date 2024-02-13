import Image from "next/image";

const Clientsay = () => {
  return (
    <div className="mx-auto max-w-2xl py-40 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="bg-image-what">
        <h3 className="text-navyblue text-center text-4xl lg:text-6xl font-semibold">
          What Clients Say About Our Restaurant Dashboard.
        </h3>
        <h4 className="text-lg font-normal text-darkgray text-center mt-4">
          Explore how our dashboard empowers restaurants with data-driven
          <br /> insights and robust features.
        </h4>

        <div className="lg:relative">
          <Image
            src={"/assets/clientsay/avatars.png"}
            alt="avatar-image"
            width={1061}
            height={733}
            className="hidden lg:block"
          />

          <span className="lg:absolute lg:bottom-40 lg:left-80">
            <Image
              src={"/assets/clientsay/user.png"}
              alt="user-image"
              width={168}
              height={168}
              className="mx-auto pt-10 lg:pb-10"
            />
            <div className="lg:inline-block bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-base font-normal text-center text-darkgray">
                Our restaurant management platform has revolutionized the way
                <br /> we handle data. With 42 dashboards covering key segments
                such as <br /> Customer, Order, Finance, Marketing,
                Transactions, and Payments, <br /> we ensure comprehensive
                insights. Role-based access control, order management, <br />{" "}
                and inventory monitoring with real-time alerts contribute to
                seamless operations. <br /> Our commitment to data security,
                validated by 60+ rules, ensures a leak-proof pipeline. <br />{" "}
                The menu recommendation and customer propensity models further
                enhance decision-making,
                <br /> making our platform a game-changer for restaurant owners
              </p>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Clientsay;
