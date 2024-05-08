import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import Management from "../components/Management";
import Graduates from "../components/Graduates";
import Companies from "../components/Companies";
import Contacts from "../components/Contacts";

const HomePage: FunctionComponent = () => {
  return (
    <div className="relative bg-whitesmoke w-full overflow-hidden flex flex-col items-start justify-start">
      <Navbar />
      <section className="self-stretch flex flex-col items-start justify-start py-[233px] px-[408px] bg-[url('/public/hero@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-21xl text-brand-secondary font-heading-h3">
        <div className="self-stretch h-[233px] flex flex-col items-center justify-start gap-[36px]">
          <h1 className="m-0 self-stretch relative text-37xl leading-[130%] font-bold font-inherit">
            МГТУ им. Н.Э. Баумана
          </h1>
          <h1 className="m-0 self-stretch relative text-inherit leading-[44px] font-bold font-inherit">
            Кафедра ИУ6
          </h1>
          <h1 className="m-0 self-stretch relative text-inherit leading-[44px] font-bold font-inherit">
            Компьютерные системы и сети
          </h1>
        </div>
      </section>
      <Management />
      <Graduates />
      <Companies />
      <Contacts />
      <section className="self-stretch flex flex-col items-start justify-start pt-8 px-[85px] pb-16 gap-[32px] text-left text-xl text-brand-primary font-paragraph-p1-bold">
        <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-black" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch relative leading-[20px] font-semibold">
            Министерство науки и высшего образования Российской Федерации
          </div>
          <div className="self-stretch relative leading-[20px] font-semibold">
            © 2024 МОСКОВСКИЙ ГОСУДАРСТВЕННЫЙ ТЕХНИЧЕСКИЙ УНИВЕРСИТЕТ
            ИМ. Н.Э. БАУМАНА
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
