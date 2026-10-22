import Button from "../global/button";
const Hero = ({ title ,  text}) => {
  return (
    <div className=" bg-grid-lines  relative z-20 overflow-hidden  ">
      <div className="flex items-center   min-h-56 md:min-h-[600px] container   ">
        <div className="flex flex-col  lg:max-w-2xl lg:mx-auto  lg:my-0 mt-24 mb-4  justify-between items-center w-full gap-12 lg:gap-6 pb-6 ">

        <div className="lg:hidden block">
          <Button
              title={"Click Here To Purchase Pharmaceutical HGH"}
              containerClass={"text-sm px-6"}
              href={"https://www.buypharmaceuticalhgh.com/"}
              target="_blank"
              rel="noreferrer"
            />
            <Button
              title="Contact"
              containerClass="mt-5 px-10 py-2.5 font-bold"
              href="mailto:fedyanasosovich@gmail.com"
            />
        </div>
          <div className="max-w-2xl lg:text-start text-center flex flex-col gap-3 lg:mt-16">
            <h1 className="text-4xl lg:text-center  lg:text-6xl font-taviraj ">{title}</h1>
            <span className="h-1 round block w-full bg-darkPurple"></span>
          </div>

          <p className="text-justify lg:text-center">
           {/* {!removeText && `From the hundreds of clients I deal with 90% of those who have
            previously purchased human growth hormone ( somatropin) over the
            internet or from a source have received fake hgh . This page is
            designed to help you identify and know the signs so as not to lose
            your money !!!!`} */}
           {text}
          </p>

          <div className="lg:block hidden">
          <Button
              title={"Click Here To Purchase Pharmaceutical HGH"}
              containerClass={"text-sm px-6"}
              href={"https://www.buypharmaceuticalhgh.com/"}
              target="_blank"
              rel="noreferrer"
            />
            <Button
              title="Contact"
              containerClass="mt-5 px-10 py-2.5 font-bold"
              href="mailto:fedyanasosovich@gmail.com"
            />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
