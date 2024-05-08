import { FunctionComponent } from "react";

const Graduates: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-start pt-16 px-0 pb-8 gap-[64px] text-left text-21xl text-black font-heading-h3">
      <h1 className="m-0 relative text-inherit leading-[44px] font-bold font-inherit">
        Выдающиеся выпускники
      </h1>
      <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-0 px-[85px] gap-[20px]">
        <img
          className="flex-1 relative rounded-3xs max-w-full overflow-hidden h-[423px] object-cover"
          alt=""
          src="/image@2x.png"
        />
        <img
          className="flex-1 relative rounded-3xs max-w-full overflow-hidden h-[423px] object-cover"
          alt=""
          src="/image@2x.png"
        />
        <img
          className="flex-1 relative rounded-3xs max-w-full overflow-hidden h-[423px] object-cover"
          alt=""
          src="/image@2x.png"
        />
        <img
          className="flex-1 relative rounded-3xs max-w-full overflow-hidden h-[423px] object-cover"
          alt=""
          src="/image@2x.png"
        />
      </div>
    </section>
  );
};

export default Graduates;
