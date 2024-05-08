import { FunctionComponent, useState, useCallback } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const AboutDepartment: FunctionComponent = () => {
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
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start text-left text-21xl text-brand-primary font-heading-h3">
      <Navbar />
      <div className="self-stretch flex flex-col items-start justify-start py-24 px-[85px]">
        <div className="self-stretch shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-brand-secondary flex flex-col items-start justify-start py-[76px] px-16 gap-[24px]">
          <b className="relative leading-[44px]">О кафедре</b>
          <div className="self-stretch relative text-lg leading-[24px] font-paragraph-p1-bold">
            <p className="[margin-block-start:0] [margin-block-end:12px]">
              Кафедра ведет подготовку специалистов в области разработки
              высокопроизводительных программно-аппаратных решений, систем
              искусственного интеллекта и сетевых технологий.
            </p>
            <p className="[margin-block-start:0] [margin-block-end:12px]">
              Для реализации собственных проектов студентам доступны современное
              оборудование и уникальные лаборатории: ускорителей вычислений,
              облачных технологий, сетевые лаборатории компаний Cisco, Huawei
              и Dlink, а также лаборатории искусственного интеллекта и интернета
              вещей.
            </p>
            <p className="m-0">
              Кафедра уделяет большое внимание творческой реализации студентов,
              проводит инженерные сессии и хакатоны.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDepartment;
