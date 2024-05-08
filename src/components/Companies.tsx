import { FunctionComponent } from "react";

const Companies: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-start pt-16 px-0 pb-8 gap-[64px] text-left text-21xl text-black font-heading-h3">
      <h1 className="m-0 relative text-inherit leading-[44px] font-bold font-inherit">
        Компании, в которых работают выпускники
      </h1>
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-[85px] gap-[20px]">
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-0 pl-px gap-[20px]">
            <div className="flex-1 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-brand-secondary overflow-hidden flex flex-row items-start justify-start py-[22px] px-[89px]">
              <img
                className="flex-1 relative max-w-full overflow-hidden h-[125px] object-cover"
                alt=""
                src="/company1-1@2x.png"
              />
            </div>
            <div className="flex-1 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-brand-secondary overflow-hidden flex flex-col items-start justify-start py-[45px] px-7">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[79px] shrink-0 object-cover"
                alt=""
                src="/company2-1@2x.png"
              />
            </div>
            <div className="flex-1 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-brand-secondary overflow-hidden flex flex-col items-start justify-start py-9 px-7">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[97px] shrink-0 object-cover"
                alt=""
                src="/company3-1@2x.png"
              />
            </div>
            <div className="flex-1 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-brand-secondary overflow-hidden flex flex-col items-start justify-start py-12 px-7">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[73px] shrink-0 object-cover"
                alt=""
                src="/company4-1@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-0 pl-px gap-[20px]">
            <div className="flex-1 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-brand-secondary overflow-hidden flex flex-row items-start justify-start py-[22px] px-[89px]">
              <img
                className="flex-1 relative max-w-full overflow-hidden h-[125px] object-cover"
                alt=""
                src="/company5-1@2x.png"
              />
            </div>
            <div className="flex-1 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-brand-secondary overflow-hidden flex flex-col items-start justify-start py-[34px] px-7">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[101px] shrink-0 object-cover"
                alt=""
                src="/company6-1@2x.png"
              />
            </div>
            <div className="flex-1 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-brand-secondary overflow-hidden flex flex-row items-start justify-start py-3.5 px-[89px]">
              <img
                className="flex-1 relative max-w-full overflow-hidden h-[141px] object-cover"
                alt=""
                src="/company7-1@2x.png"
              />
            </div>
            <div className="flex-1 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-brand-secondary overflow-hidden flex flex-col items-start justify-start py-3.5 px-[42px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[141px] shrink-0 object-cover"
                alt=""
                src="/company9-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
