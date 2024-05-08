import { FunctionComponent, useState, useCallback } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const InternationalBachelor: FunctionComponent = () => {
  const [dropDownBoxAnchorEl, setDropDownBoxAnchorEl] =
    useState<HTMLElement | null>(null);
  const [dropDownBox1AnchorEl, setDropDownBox1AnchorEl] =
    useState<HTMLElement | null>(null);
  const navigate = useNavigate();
  const dropDownBoxOpen = Boolean(dropDownBoxAnchorEl);
  const handleDropDownBoxClick = (event: React.MouseEvent<HTMLElement>) => {
    setDropDownBoxAnchorEl(event.currentTarget);
  };
  const handleDropDownBoxClose = () => {
    setDropDownBoxAnchorEl(null);
  };
  const dropDownBox1Open = Boolean(dropDownBox1AnchorEl);
  const handleDropDownBox1Click = (event: React.MouseEvent<HTMLElement>) => {
    setDropDownBox1AnchorEl(event.currentTarget);
  };
  const handleDropDownBox1Close = () => {
    setDropDownBox1AnchorEl(null);
  };

  const onLinkClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLink1Click = useCallback(() => {
    navigate("/aboutdepartment");
  }, [navigate]);

  const onLink2Click = useCallback(() => {
    navigate("/scientificwork");
  }, [navigate]);

  const onLink3Click = useCallback(() => {
    navigate("/teachers");
  }, [navigate]);

  const onLink4Click = useCallback(() => {
    navigate("/news");
  }, [navigate]);

  const onButtonFALSELargeClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="relative bg-whitesmoke w-full overflow-y-auto flex flex-col items-center justify-start pt-0 px-0 pb-24 box-border gap-[96px] text-left text-21xl text-brand-primary font-heading-h3">
      <Navbar />
      <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-brand-secondary overflow-hidden shrink-0 flex flex-row items-center justify-start py-10 px-4">
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <div className="flex flex-row items-center justify-center py-0 px-6">
            <b className="relative leading-[44px]">
              О поступлении иностранным гражданам
            </b>
          </div>
          <div className="flex flex-col items-start justify-start text-5xl font-paragraph-p1-bold">
            <div className="w-[879px] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start py-4 px-6 gap-[12px]">
                <div className="flex-1 relative leading-[20px]">
                  Условия поступления
                </div>
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/iconangledown.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 px-5">
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/divider.svg"
                />
              </div>
              <div className="w-[563px] hidden flex-col items-start justify-start p-4 box-border text-sm text-gray font-inter">
                <div className="self-stretch relative leading-[20px]">
                  An accordion menu is a vertically stacked list of headers that
                  can be clicked to reveal or hide content associated with them.
                  It is one of many ways you can expose content to users in a
                  progressive manner.
                </div>
              </div>
            </div>
            <div className="w-[879px] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start py-4 px-6 gap-[12px]">
                <div className="flex-1 relative leading-[20px]">
                  Направления
                </div>
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/iconangledown.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 px-5">
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/divider.svg"
                />
              </div>
              <div className="w-[563px] hidden flex-col items-start justify-start p-4 box-border text-sm text-gray font-inter">
                <div className="self-stretch relative leading-[20px]">
                  An accordion menu is a vertically stacked list of headers that
                  can be clicked to reveal or hide content associated with them.
                  It is one of many ways you can expose content to users in a
                  progressive manner.
                </div>
              </div>
            </div>
            <div className="w-[879px] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start py-4 px-6 gap-[12px]">
                <div className="flex-1 relative leading-[20px]">
                  Необходимые документы
                </div>
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/iconangledown.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 px-5">
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/divider.svg"
                />
              </div>
              <div className="w-[563px] hidden flex-col items-start justify-start p-4 box-border text-sm text-gray font-inter">
                <div className="self-stretch relative leading-[20px]">
                  An accordion menu is a vertically stacked list of headers that
                  can be clicked to reveal or hide content associated with them.
                  It is one of many ways you can expose content to users in a
                  progressive manner.
                </div>
              </div>
            </div>
            <div className="w-[879px] bg-brand-secondary flex flex-col items-start justify-start text-xl">
              <div className="self-stretch flex flex-row items-start justify-start py-4 pr-6 pl-4 gap-[12px] text-5xl">
                <div className="flex-1 relative leading-[20px]">
                  Как начать учиться?
                </div>
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/iconangleup.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/divider1.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start p-4 gap-[12px]">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Памятка первокурсника
                </div>
                <div className="self-stretch relative text-lg leading-[24px]">
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    Всем иностранным гражданам, находящимся на территории
                    Российской Федерации,
                  </p>
                  <ul className="m-0 font-inherit text-inherit pl-6">
                    <li className="mb-0">
                      <span>
                        желательно оформить социальную карту студента;
                      </span>
                    </li>
                    <li className="mb-0">
                      <span>
                        обязательно банковскую карту для получения стипендии;
                      </span>
                    </li>
                    <li className="mb-0">
                      <span>
                        забрать зачетную книжку, студенческий билет и пропуск
                        в своем деканате
                      </span>
                    </li>
                  </ul>
                  <p className="[margin-block-start:0] [margin-block-end:12px] text-royalblue">
                    <span>(</span>
                    <a
                      className="text-[inherit]"
                      href="https://api.www.bmstu.ru/upload/document/494/644908b3a2ba7.pdf"
                      target="_blank"
                    >
                      <span>Информация о расположениях факультетов</span>
                    </a>
                    <span className="text-brand-primary">). </span>
                    <a
                      className="text-[inherit]"
                      href="https://api.www.bmstu.ru/upload/document/495/64490900844aa.pdf"
                      target="_blank"
                    >
                      <span>
                        Памятка по оформлению банковской карты для получения
                        стипендии
                      </span>
                    </a>
                  </p>
                  <p className="m-0 text-royalblue">
                    <a
                      className="text-[inherit]"
                      href="https://api.www.bmstu.ru/upload/document/496/6449092b4266b.pdf"
                      target="_blank"
                    >
                      <span>
                        Памятка по оформлению социальной карты студента
                      </span>
                    </a>
                  </p>
                </div>
              </div>
              <div className="w-[840px] hidden flex-col items-start justify-start p-4 box-border gap-[12px]">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Дополнительные
                </div>
                <div className="self-stretch relative text-lg leading-[24px]">
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    1. Для поступления на целевое обучение:
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    1.1. Электронная копию договора о целевом обучении, между
                    абитуриентом и органом государственной власти РФ, местного
                    самоуправления, учреждением, предприятием и т.п.
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    2. При наличии достижений:
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    2.1. Копии опубликованный статей и их скриншоты
                    их публикации 
                    <a
                      className="text-[inherit]"
                      href="https://www.elibrary.ru/"
                      target="_blank"
                    >
                      elibrary
                    </a>
                    ; копии дипломов и иных документов, подтверждающих наличие
                    индивидуальных достижений.
                  </p>
                  <p className="m-0">
                    3. Другие документы, представление которых отвечает
                    интересам абитуриентов.
                  </p>
                </div>
              </div>
              <div className="w-[840px] hidden flex-col items-start justify-start p-4 box-border gap-[12px]">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Способы подачи документов
                </div>
                <div className="self-stretch relative text-lg leading-[24px]" />
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-[351px] relative h-[312px] object-cover"
          alt=""
          src="/bachelor-img@2x.png"
        />
      </div>
    </div>
  );
};

export default InternationalBachelor;
