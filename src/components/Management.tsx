import { FunctionComponent } from "react";

const Management: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-center text-left text-5xl text-brand-primary font-paragraph-p1-bold">
      <div className="flex flex-row items-start justify-start pt-24 px-10 pb-8 gap-[32px]">
        <img
          className="w-[355px] relative rounded-2xl h-[474px] object-cover"
          alt=""
          src="/photo@2x.png"
        />
        <div className="w-[786px] shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-brand-secondary flex flex-col items-start justify-start py-[76px] px-16 box-border gap-[16px]">
          <b className="self-stretch relative leading-[22px]">Руководство</b>
          <h1 className="m-0 w-[434px] relative text-21xl leading-[44px] font-bold font-heading-h3 flex items-center">
            Пролетарский Андрей Викторович
          </h1>
          <div className="self-stretch relative text-lg leading-[24px]">
            <p className="[margin-block-start:0] [margin-block-end:12px]">
              Декан факультета «Информатика и системы управления», заведующий
              кафедрой ИУ6 «Компьютерные системы и сети», доктор технический
              наук, профессор.
            </p>
            <p className="m-0">
              Автор более 100 научных трудов по информационным технологиям и
              системам управления, более 40 научных работ в области
              программно-алгоритмического обеспечения для систем управления
              ракетами-носителями и космическими аппаратами.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;
