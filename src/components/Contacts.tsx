import { FunctionComponent } from "react";

const Contacts: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-between py-16 px-[85px] text-left text-5xl text-gray-gray50 font-paragraph-p1-bold">
      <div className="w-[575px] rounded-2xl bg-brand-secondary flex flex-col items-start justify-start py-[76px] px-16 box-border gap-[24px]">
        <h1 className="m-0 self-stretch relative text-21xl leading-[44px] font-bold font-heading-h3 text-brand-primary">
          Контактные данные
        </h1>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch relative leading-[20px]">
            НОМЕР ТЕЛЕФОНА
          </div>
          <div className="self-stretch relative text-13xl leading-[36px] font-heading-h3 text-brand-primary">
            8 (499) 261-03-90
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch relative leading-[20px]">E-MAIL</div>
          <h2 className="m-0 self-stretch relative text-13xl leading-[36px] font-normal font-heading-h3 text-darkslategray">
            k_iu6@bmstu.ru
          </h2>
        </div>
        <div className="w-[275px] flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch relative leading-[20px]">
            ВРЕМЯ РАБОТЫ
          </div>
          <div className="self-stretch relative text-13xl leading-[36px] font-heading-h3 text-darkslategray">
            Пн-Пт: 10:00-17:00
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch relative leading-[20px]">АДРЕС</div>
          <h2 className="m-0 self-stretch relative text-13xl leading-[36px] font-normal font-heading-h3 text-darkslategray">
            2-я Бауманская улица, дом 5, строение 1, 8 этаж, каб. 802
          </h2>
        </div>
      </div>
      <img
        className="w-[573px] relative rounded-2xl h-[616px] object-cover mix-blend-normal"
        alt=""
        src="/example@2x.png"
      />
    </section>
  );
};

export default Contacts;
