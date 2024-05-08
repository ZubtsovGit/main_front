import { FunctionComponent, useState, useCallback } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Bachlor: FunctionComponent = () => {
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
    <div className="relative bg-whitesmoke w-full overflow-y-auto flex flex-col items-center justify-start pt-0 px-0 pb-24 box-border gap-[96px]">
      <Navbar />
      <section className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-brand-secondary overflow-hidden shrink-0 flex flex-row items-center justify-center py-10 px-4 gap-[11px] text-left text-21xl text-brand-primary font-heading-h3">
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <div className="flex flex-row items-center justify-center py-0 px-6">
            <h2 className="m-0 relative text-inherit leading-[44px] font-bold font-inherit">
              Всё о поступлении на магистратуру
            </h2>
          </div>
          <div className="flex flex-col items-start justify-start text-xl font-paragraph-p1-bold">
            <div className="w-[879px] bg-brand-secondary flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start py-4 pr-6 pl-4 gap-[12px] text-5xl">
                <div className="flex-1 relative leading-[20px]">
                  Условия поступления
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
              <div className="self-stretch flex flex-row items-start justify-start p-4">
                <div className="flex-1 relative leading-[20px] font-semibold">
                  Минимальный балл ЕГЭ для обязательных предметов
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-4 px-6 text-21xl text-royalblue font-heading-h3">
                <div className="flex-1 flex flex-row items-start justify-start gap-[64px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                    <b className="w-[180px] relative leading-[44px] inline-block">
                      45
                    </b>
                    <div className="w-[180px] relative text-lg leading-[24px] font-paragraph-p1-bold text-brand-primary inline-block">
                      Математика профильная
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                    <b className="w-[180px] relative leading-[44px] inline-block">
                      45
                    </b>
                    <div className="w-[180px] relative text-lg leading-[24px] font-paragraph-p1-bold text-brand-primary inline-block">
                      Русский язык
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 px-3">
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/divider4.svg"
                />
              </div>
              <div className="w-[840px] hidden flex-row items-start justify-start p-4 box-border">
                <div className="flex-1 relative leading-[20px] font-semibold">
                  Минимальный балл ЕГЭ для предметов по выбору
                </div>
              </div>
              <div className="w-[840px] hidden flex-row items-start justify-start p-4 box-border text-21xl text-royalblue font-heading-h3">
                <div className="flex-1 flex flex-row items-start justify-start gap-[64px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                    <b className="relative leading-[44px]">45</b>
                    <div className="relative text-lg leading-[24px] font-paragraph-p1-bold text-brand-primary">
                      Физика
                    </div>
                  </div>
                  <div className="flex-1 h-[74px] flex flex-col items-start justify-end text-lg text-gray-gray50 font-paragraph-p1-bold">
                    <div className="relative leading-[24px]">или</div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                    <b className="relative leading-[44px]">45</b>
                    <div className="relative text-lg leading-[24px] font-paragraph-p1-bold text-brand-primary">
                      Информатика
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 px-3">
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/divider4.svg"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start p-4">
                <div className="flex-1 relative leading-[20px] font-semibold">
                  Количество мест
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-4 px-6 text-21xl text-royalblue font-heading-h3">
                <div className="flex-1 flex flex-row items-start justify-start gap-[64px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                    <b className="w-[180px] relative leading-[44px] inline-block">
                      254
                    </b>
                    <div className="w-[180px] relative text-lg leading-[24px] font-paragraph-p1-bold text-brand-primary inline-block">
                      Бюджетных
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                    <b className="w-[180px] relative leading-[44px] inline-block">
                      242
                    </b>
                    <div className="w-[180px] relative text-lg leading-[24px] font-paragraph-p1-bold text-brand-primary inline-block">
                      Платных
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 px-3">
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/divider4.svg"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start p-4">
                <div className="flex-1 relative leading-[20px] font-semibold">
                  Стоимость обучения
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-4 px-6 text-21xl text-royalblue font-heading-h3">
                <div className="flex-1 flex flex-row items-start justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <b className="w-[180px] relative leading-[44px] inline-block">
                      329 761 ₽
                    </b>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 px-3">
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/divider4.svg"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start p-4">
                <div className="flex-1 relative leading-[20px] font-semibold">
                  Проходные баллы прошлых лет
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 px-3">
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/divider4.svg"
                />
              </div>
              <div className="w-[840px] hidden flex-row items-start justify-start p-4 box-border">
                <div className="flex-1 relative leading-[20px] font-semibold">
                  Проходные баллы прошлых лет
                </div>
              </div>
              <div className="w-[840px] hidden flex-row items-start justify-start p-4 box-border text-21xl text-royalblue font-heading-h3">
                <div className="flex-1 flex flex-row items-start justify-start gap-[64px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                    <b className="w-[180px] relative leading-[44px] inline-block">
                      287
                    </b>
                    <div className="w-[180px] relative text-lg leading-[24px] font-paragraph-p1-bold text-brand-primary inline-block">
                      в 2023 году
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                    <b className="w-[180px] relative leading-[44px] inline-block">
                      287
                    </b>
                    <div className="w-[180px] relative text-lg leading-[24px] font-paragraph-p1-bold text-brand-primary inline-block">
                      в 2022 году
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                    <b className="w-[180px] relative leading-[44px] inline-block">
                      287
                    </b>
                    <div className="w-[180px] relative text-lg leading-[24px] font-paragraph-p1-bold text-brand-primary inline-block">
                      в 2021 году
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-4 px-6 text-21xl text-royalblue font-heading-h3">
                <div className="flex-1 flex flex-row items-start justify-start gap-[64px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                    <b className="w-[180px] relative leading-[44px] inline-block">
                      287
                    </b>
                    <div className="w-[180px] relative text-lg leading-[24px] font-paragraph-p1-bold text-brand-primary inline-block">
                      в 2023 году
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                    <b className="w-[180px] relative leading-[44px] inline-block">
                      287
                    </b>
                    <div className="w-[180px] relative text-lg leading-[24px] font-paragraph-p1-bold text-brand-primary inline-block">
                      в 2022 году
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                    <b className="w-[180px] relative leading-[44px] inline-block">
                      287
                    </b>
                    <div className="w-[180px] relative text-lg leading-[24px] font-paragraph-p1-bold text-brand-primary inline-block">
                      в 2021 году
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[879px] bg-brand-secondary flex flex-col items-start justify-start text-5xl">
              <div className="self-stretch flex flex-row items-start justify-start py-4 pr-6 pl-4 gap-[12px]">
                <div className="flex-1 relative leading-[20px]">
                  Направления
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
              <div className="self-stretch flex flex-col items-start justify-start text-base border-[1px] border-solid border-table-border">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start text-lg">
                  <div className="self-stretch w-[253px] flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start border-t-[1px] border-solid border-gray-gray50 border-l-[1px]">
                      <img
                        className="w-[105px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                        alt=""
                        src="/frame-2.svg"
                      />
                      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[7px] px-2">
                        <b className="self-stretch relative leading-[24px]">
                          Название направления
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start border-t-[1px] border-solid border-gray-gray50 border-l-[1px]">
                      <img
                        className="w-[105px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                        alt=""
                        src="/frame-21.svg"
                      />
                      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[7px] px-2">
                        <b className="self-stretch relative leading-[24px]">
                          Код направления
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start border-t-[1px] border-solid border-gray-gray50 border-l-[1px]">
                      <img
                        className="w-[105px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                        alt=""
                        src="/frame-21.svg"
                      />
                      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[7px] px-2">
                        <b className="self-stretch relative leading-[24px]">
                          Форма обучения
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start border-t-[1px] border-solid border-gray-gray50 border-l-[1px]">
                      <img
                        className="w-[105px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                        alt=""
                        src="/frame-21.svg"
                      />
                      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[7px] px-2">
                        <b className="self-stretch relative leading-[24px]">
                          Период обучения
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start">
                  <div className="self-stretch w-[253px] box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-gray-gray50 border-l-[1px]">
                    <img
                      className="w-[105px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                      alt=""
                      src="/frame-2.svg"
                    />
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[7px] px-2">
                      <div className="self-stretch relative leading-[20px]">
                        Информатика и вычислительная техника – Вычислительные
                        машины, комплексы, системы и сети
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start border-t-[1px] border-solid border-gray-gray50 border-l-[1px]">
                    <img
                      className="w-[105px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                      alt=""
                      src="/frame-21.svg"
                    />
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[7px] px-2">
                      <div className="self-stretch relative leading-[20px]">
                        09.03.01/03
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start border-t-[1px] border-solid border-gray-gray50 border-l-[1px]">
                    <img
                      className="w-[105px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                      alt=""
                      src="/frame-21.svg"
                    />
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[7px] px-2">
                      <div className="self-stretch relative leading-[20px]">
                        очная
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start border-t-[1px] border-solid border-gray-gray50 border-l-[1px]">
                    <img
                      className="w-[105px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                      alt=""
                      src="/frame-21.svg"
                    />
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[7px] px-2">
                      <div className="self-stretch relative leading-[20px]">
                        4 года
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start">
                  <div className="self-stretch w-[253px] box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-gray-gray50 border-l-[1px]">
                    <img
                      className="w-[105px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                      alt=""
                      src="/frame-2.svg"
                    />
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[7px] px-2">
                      <div className="self-stretch relative leading-[20px]">
                        Информатика и вычислительная техника – Системы
                        искусственного интеллекта
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start border-t-[1px] border-solid border-gray-gray50 border-l-[1px]">
                    <img
                      className="w-[105px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                      alt=""
                      src="/frame-21.svg"
                    />
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[7px] px-2">
                      <div className="self-stretch relative leading-[20px]">
                        09.03.01/05
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start border-t-[1px] border-solid border-gray-gray50 border-l-[1px]">
                    <img
                      className="w-[105px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                      alt=""
                      src="/frame-21.svg"
                    />
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[7px] px-2">
                      <div className="self-stretch relative leading-[20px]">
                        очная
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start border-t-[1px] border-solid border-gray-gray50 border-l-[1px]">
                    <img
                      className="w-[105px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                      alt=""
                      src="/frame-21.svg"
                    />
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[7px] px-2">
                      <div className="self-stretch relative leading-[20px]">
                        4 года
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start">
                  <div className="self-stretch w-[253px] box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-gray-gray50 border-l-[1px]">
                    <img
                      className="w-[105px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                      alt=""
                      src="/frame-2.svg"
                    />
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[7px] px-2">
                      <div className="self-stretch relative leading-[20px]">
                        Программно-аппаратное обеспечение систем и
                        искусственного интеллекта
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start border-t-[1px] border-solid border-gray-gray50 border-l-[1px]">
                    <img
                      className="w-[105px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                      alt=""
                      src="/frame-21.svg"
                    />
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[7px] px-2">
                      <div className="self-stretch relative leading-[20px]">
                        9.03.01/C2
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start border-t-[1px] border-solid border-gray-gray50 border-l-[1px]">
                    <img
                      className="w-[105px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                      alt=""
                      src="/frame-21.svg"
                    />
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[7px] px-2">
                      <div className="self-stretch relative leading-[20px]">
                        очная
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start border-t-[1px] border-solid border-gray-gray50 border-l-[1px]">
                    <img
                      className="w-[105px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                      alt=""
                      src="/frame-21.svg"
                    />
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[7px] px-2">
                      <div className="self-stretch relative leading-[20px]">
                        4 года
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start">
                  <div className="self-stretch w-[253px] box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-gray-gray50 border-l-[1px]">
                    <img
                      className="w-[105px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                      alt=""
                      src="/frame-2.svg"
                    />
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[7px] px-2">
                      <div className="self-stretch relative leading-[20px]">
                        Прикладная информатика – Программно-технические средства
                        информатизации
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start border-t-[1px] border-solid border-gray-gray50 border-l-[1px]">
                    <img
                      className="w-[105px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                      alt=""
                      src="/frame-21.svg"
                    />
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[7px] px-2">
                      <div className="self-stretch relative leading-[20px]">
                        09.03.03/02
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start border-t-[1px] border-solid border-gray-gray50 border-l-[1px]">
                    <img
                      className="w-[105px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                      alt=""
                      src="/frame-21.svg"
                    />
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[7px] px-2">
                      <div className="self-stretch relative leading-[20px]">
                        очная
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start border-t-[1px] border-solid border-gray-gray50 border-l-[1px]">
                    <img
                      className="w-[105px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                      alt=""
                      src="/frame-21.svg"
                    />
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[7px] px-2">
                      <div className="self-stretch relative leading-[20px]">
                        4 года
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[879px] bg-brand-secondary flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start py-4 pr-6 pl-4 gap-[12px] text-5xl">
                <div className="flex-1 relative leading-[20px]">
                  Необходимые документы
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
                  Общие
                </div>
                <div className="self-stretch relative text-lg leading-[24px]">
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    1. Данные документа, удостоверяющего личность (паспорта),
                    а также его копию (развороты 2 и 3 с личными данными);
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    2. Данные документа установленного образца об образовании
                    (все страницы), а также его копию;
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    3. Данные о документе, по которому сдавался ЕГЭ (если
                    он отличаются от паспорта);
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    4. Заявления на имя Ректора (формируются автоматически при
                    подаче через личный кабинет или через ЕПГУ):
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    4.1. Заявление № 1 — Заявление о подаче документов в МГТУ
                    им. Н.Э. Баумана;
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    4.2. Заявление № 2 — Заявление о приеме на места в рамках
                    контрольных цифр приема и на места по договорам об оказании
                    платных образовательных услуг;
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    5. Электронная фотография (в формате, как на паспорт или
                    другие документы), сделанное не ранее, чем за полгода
                    до момента подачи документов (6 фотографий размером 3×4
                    необходимо предоставить при подаче документов или в первый
                    учебный день в деканат своего факультета);
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    6. Копия специального медицинского заключения для
                    поступающих на следующие направления:
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    11.05.01 «Радиоэлектронные системы и комплексы»;
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    13.03.01 «Теплотехника и теплоэнергетика»;
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    13.03.02 «Электроэнергетика и электротехника»;
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    14.03.01 «Ядерная энергетика и теплофизика»;
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    14.05.01 «Ядерные реакторы и материалы»;
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    16.03.03 «Холодильная, криогенная техника и системы
                    жизнеобеспечения»;
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    16.05.01 «Специальные системы жизнеобеспечения»;
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    23.03.03 «Эксплуатация транспортно технологических машин
                    и комплексов»;
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    23.05.01 «Наземные транспортно технологические средства»;
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    23.05.02 «Транспортные средства специального назначения»;
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    44.03.04 «Профессиональное обучение».
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    7. СНИЛС (можно просто номер);
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    8. Приписное свидетельство для юношей.
                  </p>
                  <p className="m-0">9. Полис ОМС (по желанию);</p>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start p-4 gap-[12px]">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Дополнительные
                </div>
                <div className="self-stretch relative text-lg leading-[24px]">
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    1. Для поступления на целевое обучение:
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    Копию договора о целевом обучении, между абитуриентом
                    и органом государственной власти РФ, местного
                    самоуправления, учреждением, предприятием и т.п.
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    2. При наличии достижений:
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    Копии дипломов победителей или призеров олимпиад школьников,
                    предоставляющие особые права на приём без вступительных
                    испытаний или на участие в конкурсе с максимально возможной
                    оценкой в 100 баллов по предмету, соответствующему профилю
                    олимпиады, или право на получение дополнительных баллов.
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    3. Для подтверждения преимущественного права на зачисление:
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    Копии документов, подтверждающих права абитуриентов
                    на преимущественное зачисление.
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    4. Для сдачи внутренних вступительных испытаний:
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    Копии документов, подтверждающих права абитуриентов
                    на сдачу.
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    5. Для подтверждения зачисления в пределах особой квоты:
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    Копии документов, подтверждающих права абитуриентов
                    на зачисление в пределах особой квоты.
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    6. Для подтверждения зачисления в рамках отдельной квоты:
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:12px]">
                    Копию документа, подтверждающего право на прием в пределах
                    отдельной квоты, выданного уполномоченным государственным
                    органом.
                  </p>
                  <p className="m-0">
                    7. Другие документы, представление которых отвечает
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
            <div className="self-stretch flex flex-col items-start justify-start p-4 gap-[12px]">
              <div className="self-stretch relative leading-[20px] font-semibold">
                Способы подачи документов
              </div>
              <div className="self-stretch relative text-lg leading-[24px]">
                <p className="[margin-block-start:0] [margin-block-end:12px]">
                  В 2023 году есть следующие способы подачи документов:
                </p>
                <ul className="m-0 font-inherit text-inherit pl-6 text-royalblue">
                  <li className="mb-0">
                    <span className="text-brand-primary">
                      через личный кабинет на 
                    </span>
                    <a
                      className="text-[inherit]"
                      href="https://priem.bmstu.ru/"
                      target="_blank"
                    >
                      <span>сайте</span>
                    </a>
                    <span className="text-brand-primary"> нашего вуза;</span>
                  </li>
                  <li className="mb-0">
                    <span className="text-brand-primary">
                      через Единый портал государственных услуг (ЕПГУ): обращаем
                      Ваше внимание, что абитуриент должен иметь свой
                      собственный личный кабинет в данной системе;
                    </span>
                  </li>
                  <li className="mb-0">
                    <span className="text-brand-primary">
                      очно, придя в Приемную комиссию нашего вуза, пройти
                      предварительную регистрацию в 345 аудитории и далее пройти
                      на интересующий Вас факультет;
                    </span>
                  </li>
                  <li className="mb-0">
                    <span className="text-brand-primary">по почте.</span>
                  </li>
                </ul>
                <p className="m-0">
                  Подача документов продлится с 20 июня по 25 июля.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-[348px] relative h-[312px] object-cover"
          alt=""
          src="/bachelor@2x.png"
        />
      </section>
    </div>
  );
};

export default Bachlor;
