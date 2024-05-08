import { FunctionComponent, useState, useCallback } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Disciplines: FunctionComponent = () => {
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
    <div className="relative bg-whitesmoke w-full overflow-y-auto flex flex-col items-start justify-start text-left text-5xl text-brand-primary font-paragraph-p1-bold">
      <Navbar />
      <div className="flex flex-col items-start justify-start py-24 px-[85px]">
        <div className="w-[1270px] shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-brand-secondary overflow-hidden flex flex-row items-center justify-start py-10 px-4 box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
            <div className="flex flex-row items-center justify-center py-0 px-6 text-21xl font-heading-h3">
              <b className="relative leading-[44px]">Дисциплины</b>
            </div>
            <div className="flex flex-row items-center justify-center py-0 px-6">
              <b className="relative leading-[22px]">Обязательная часть</b>
            </div>
            <div className="w-[1238px] bg-brand-secondary flex flex-col items-start justify-start text-xl">
              <div className="self-stretch flex flex-row items-start justify-start py-4 pr-6 pl-4 gap-[12px] text-5xl">
                <div className="flex-1 relative leading-[20px]">
                  Математическая логика и теория алгоритмов
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
                  src="/divider2.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start p-4 gap-[12px]">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Преподаватель
                </div>
                <div className="self-stretch relative text-lg leading-[24px]">
                  Гуренко Владимир Викторович
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start p-4 gap-[12px]">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Направление
                </div>
                <div className="self-stretch relative text-lg leading-[24px]">
                  <p className="[margin-block-start:0] [margin-block-end:12px]">{`09.03.01/03 Информатика и вычислительная техника – Вычислительные машины, комплексы, системы и сети; `}</p>
                  <p className="m-0">
                    09.03.03/02 Прикладная информатика – Программно-технические
                    средства информатизации
                  </p>
                </div>
              </div>
              <div className="w-[840px] hidden flex-col items-start justify-start p-4 box-border gap-[12px]">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Subheading
                </div>
                <div className="self-stretch relative text-lg leading-[24px]">
                  Maecenas scelerisque
                </div>
              </div>
            </div>
            <div className="w-[1238px] bg-brand-secondary flex flex-col items-start justify-start text-xl">
              <div className="self-stretch flex flex-row items-start justify-start py-4 pr-6 pl-4 gap-[12px] text-5xl">
                <div className="flex-1 relative leading-[20px]">
                  Технология разработки программных систем
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
                  src="/divider2.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start p-4 gap-[12px]">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Преподаватель
                </div>
                <div className="self-stretch relative text-lg leading-[24px]">
                  Евгений Константинович Пугачев
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start p-4 gap-[12px]">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Направление
                </div>
                <div className="self-stretch relative text-lg leading-[24px]">
                  <p className="[margin-block-start:0] [margin-block-end:12px]">{`09.03.01/03 Информатика и вычислительная техника – Вычислительные машины, комплексы, системы и сети; `}</p>
                  <p className="m-0">
                    09.03.03/02 Прикладная информатика – Программно-технические
                    средства информатизации
                  </p>
                </div>
              </div>
              <div className="w-[840px] hidden flex-col items-start justify-start p-4 box-border gap-[12px]">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Subheading
                </div>
                <div className="self-stretch relative text-lg leading-[24px]">
                  Maecenas scelerisque
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center py-0 px-6">
              <b className="relative leading-[22px]">Дисциплины по выбору</b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start py-4 px-6 gap-[12px]">
                <div className="flex-1 relative leading-[20px]">
                  Название дисциплины по выбору
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
                  src="/divider3.svg"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disciplines;
