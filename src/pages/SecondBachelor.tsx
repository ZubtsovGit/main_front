import { FunctionComponent, useState, useCallback } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const SecondBachelor: FunctionComponent = () => {
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
    <div className="relative bg-whitesmoke w-full overflow-hidden flex flex-col items-start justify-start">
      <Navbar />
      <main className="flex flex-row items-start justify-start py-24 px-[85px]">
        <section className="w-[1270px] shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-brand-secondary flex flex-col items-start justify-start py-[76px] px-16 box-border gap-[24px] text-left text-lg text-brand-primary font-paragraph-p1-bold">
          <h1 className="m-0 relative text-21xl leading-[44px] font-bold font-heading-h3">
            Второе высшее образование
          </h1>
          <div className="self-stretch relative leading-[24px]">
            МГТУ им. Н.Э. Баумана предоставляет возможность получить второе
            высшее образование по любому направлению подготовки (специальности)
            в Университете. Для каждого студента составляется индивидуальный
            учебный план, что делает программы второго высшего образования
            доступными как для лиц, имеющих техническое образование, так и
            гуманитарное.
          </div>
          <b className="relative text-5xl leading-[22px]">
            Подробнее о получении второго высшего образования
          </b>
          <img
            className="w-[1132px] relative h-[584px] object-cover"
            alt=""
            src="/secondbachelor-1@2x.png"
          />
          <b className="relative text-5xl leading-[22px]">
            В систему университетского второго высшего образования входят:
          </b>
          <div className="self-stretch relative leading-[24px]">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li className="mb-0">
                <span>
                  проведение приемной кампании для поступающих на второе высшее
                  образование в МГТУ им. Н.Э. Баумана;
                </span>
              </li>
              <li className="mb-0">
                <span>
                  оказание консультаций абитуриентам в определении траектории
                  обучения (в том числе по индивидуальному учебному плану),
                  разработка индивидуальных (междисциплинарных) траекторий
                  обучения;
                </span>
              </li>
              <li className="mb-0">
                <span>
                  формирование индивидуальных траекторий обучения студентов;
                </span>
              </li>
              <li className="mb-0">
                <span>
                  заключение договоров о предоставлении платных образовательных
                  услуг;
                </span>
              </li>
              <li className="mb-0">
                <span>
                  сопровождение студентов второго высшего образование
                  на протяжении всего периода обучения.
                </span>
              </li>
            </ul>
            <p className="m-0 text-royalblue">
              <span>
                Узнать подробнее об обучении на платной на основе можно на 
              </span>
              <a
                className="text-[inherit]"
                href="https://course.bmstu.ru/2edu"
                target="_blank"
              >
                <span>сайте</span>
              </a>
              <span className="text-brand-primary">.</span>
            </p>
          </div>
          <b className="relative text-5xl leading-[22px]">Форма обучения</b>
          <div className="self-stretch relative leading-[24px]">
            Очная, реализуемая как в дневное, так и в вечернее время
            (в зависимости от направления подготовки). Занятия в учебных группах
            проводятся 4 — 6 дней в неделю.
          </div>
          <b className="relative text-5xl leading-[22px]">
            По всем вопросам можно обращаться:
          </b>
          <div className="self-stretch relative leading-[24px] text-royalblue">
            <ul className="m-0 font-inherit text-inherit pl-6">
              <li className="mb-0">
                <span className="text-brand-primary">Email: </span>
                <a
                  className="text-[inherit]"
                  href="mailto:2edu@bmstu.ru"
                  target="_blank"
                >
                  <span>2edu@bmstu.ru</span>
                </a>
              </li>
              <li className="mb-0">
                <span className="text-brand-primary">
                  Тел.: +7 (499) 263-66-05
                </span>
              </li>
              <li className="mb-0">
                <span className="text-brand-primary">
                  Тел.: +7 (499) 216-97-63
                </span>
              </li>
              <li>
                <span className="text-brand-primary">Ауд.: 225, ГУК</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SecondBachelor;
