import { FunctionComponent, useState, useCallback } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const News: FunctionComponent = () => {
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
    <div className="relative bg-whitesmoke w-full overflow-y-auto flex flex-col items-start justify-start text-left text-sm text-brand-primary font-paragraph-p1-bold">
      <Navbar />
      <div className="flex flex-col items-start justify-start py-24 px-[85px]">
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <div className="flex flex-row items-start justify-start gap-[20px]">
            <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-brand-secondary flex flex-col items-start justify-start pt-0 px-0 pb-3 gap-[12px]">
              <div className="w-[303px] relative h-[200px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-t-2xl rounded-b-none w-[303px] h-[200px] object-cover"
                  alt=""
                  src="/image@2x.png"
                />
                <div className="absolute top-[160px] left-[214px] rounded bg-brand-secondary flex flex-col items-start justify-start py-0.5 px-1">
                  <div className="relative leading-[16px]">Иванов И. И.</div>
                  <div className="relative leading-[16px]">23.03.2024</div>
                </div>
              </div>
              <div className="w-[303px] flex flex-col items-start justify-start py-0 px-4 box-border gap-[8px] text-xl">
                <div className="w-[254px] relative leading-[20px] font-semibold flex items-center">
                  Прошёл финал Хардатона «Инженерный вызов» — масштабных
                  соревнований по робототехнике
                </div>
                <div className="flex flex-row items-start justify-start gap-[16px] text-base text-royalblue">
                  <div className="relative leading-[20px]">#студентам</div>
                  <div className="relative leading-[20px]">#конкурс</div>
                </div>
              </div>
            </div>
            <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-brand-secondary flex flex-col items-start justify-start pt-0 px-0 pb-3 gap-[12px]">
              <div className="w-[303px] relative h-[200px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-t-2xl rounded-b-none w-[303px] h-[200px] object-cover"
                  alt=""
                  src="/image@2x.png"
                />
                <div className="absolute top-[160px] left-[214px] rounded bg-brand-secondary flex flex-col items-start justify-start py-0.5 px-1">
                  <div className="relative leading-[16px]">Иванов И. И.</div>
                  <div className="relative leading-[16px]">23.03.2024</div>
                </div>
              </div>
              <div className="w-[303px] flex flex-col items-start justify-start py-0 px-4 box-border gap-[8px] text-xl">
                <div className="w-[254px] relative leading-[20px] font-semibold flex items-center">
                  Прошёл финал Хардатона «Инженерный вызов» — масштабных
                  соревнований по робототехнике
                </div>
                <div className="flex flex-row items-start justify-start gap-[16px] text-base text-royalblue">
                  <div className="relative leading-[20px]">#студентам</div>
                  <div className="relative leading-[20px]">#конкурс</div>
                </div>
              </div>
            </div>
            <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-brand-secondary flex flex-col items-start justify-start pt-0 px-0 pb-3 gap-[12px]">
              <div className="w-[303px] relative h-[200px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-t-2xl rounded-b-none w-[303px] h-[200px] object-cover"
                  alt=""
                  src="/image@2x.png"
                />
                <div className="absolute top-[160px] left-[214px] rounded bg-brand-secondary flex flex-col items-start justify-start py-0.5 px-1">
                  <div className="relative leading-[16px]">Иванов И. И.</div>
                  <div className="relative leading-[16px]">23.03.2024</div>
                </div>
              </div>
              <div className="w-[303px] flex flex-col items-start justify-start py-0 px-4 box-border gap-[8px] text-xl">
                <div className="w-[254px] relative leading-[20px] font-semibold flex items-center">
                  Прошёл финал Хардатона «Инженерный вызов» — масштабных
                  соревнований по робототехнике
                </div>
                <div className="flex flex-row items-start justify-start gap-[16px] text-base text-royalblue">
                  <div className="relative leading-[20px]">#студентам</div>
                  <div className="relative leading-[20px]">#конкурс</div>
                </div>
              </div>
            </div>
            <div className="w-[302px] shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-brand-secondary flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border gap-[12px]">
              <div className="w-[303px] relative h-[200px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-t-2xl rounded-b-none w-[303px] h-[200px] object-cover"
                  alt=""
                  src="/image@2x.png"
                />
                <div className="absolute top-[160px] left-[214px] rounded bg-brand-secondary flex flex-col items-start justify-start py-0.5 px-1">
                  <div className="relative leading-[16px]">Иванов И. И.</div>
                  <div className="relative leading-[16px]">23.03.2024</div>
                </div>
              </div>
              <div className="w-[303px] flex flex-col items-start justify-start py-0 px-4 box-border gap-[8px] text-xl">
                <div className="w-[254px] relative leading-[20px] font-semibold flex items-center">
                  Прошёл финал Хардатона «Инженерный вызов» — масштабных
                  соревнований по робототехнике
                </div>
                <div className="flex flex-row items-start justify-start gap-[16px] text-base text-royalblue">
                  <div className="relative leading-[20px]">#студентам</div>
                  <div className="relative leading-[20px]">#конкурс</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[20px]">
            <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-brand-secondary flex flex-col items-start justify-start pt-0 px-0 pb-3 gap-[12px]">
              <div className="w-[303px] relative h-[200px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-t-2xl rounded-b-none w-[303px] h-[200px] object-cover"
                  alt=""
                  src="/image@2x.png"
                />
                <div className="absolute top-[160px] left-[214px] rounded bg-brand-secondary flex flex-col items-start justify-start py-0.5 px-1">
                  <div className="relative leading-[16px]">Иванов И. И.</div>
                  <div className="relative leading-[16px]">23.03.2024</div>
                </div>
              </div>
              <div className="w-[303px] flex flex-col items-start justify-start py-0 px-4 box-border gap-[8px] text-xl">
                <div className="w-[254px] relative leading-[20px] font-semibold flex items-center">
                  Прошёл финал Хардатона «Инженерный вызов» — масштабных
                  соревнований по робототехнике
                </div>
                <div className="flex flex-row items-start justify-start gap-[16px] text-base text-royalblue">
                  <div className="relative leading-[20px]">#студентам</div>
                  <div className="relative leading-[20px]">#конкурс</div>
                </div>
              </div>
            </div>
            <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-brand-secondary flex flex-col items-start justify-start pt-0 px-0 pb-3 gap-[12px]">
              <div className="w-[303px] relative h-[200px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-t-2xl rounded-b-none w-[303px] h-[200px] object-cover"
                  alt=""
                  src="/image@2x.png"
                />
                <div className="absolute top-[160px] left-[214px] rounded bg-brand-secondary flex flex-col items-start justify-start py-0.5 px-1">
                  <div className="relative leading-[16px]">Иванов И. И.</div>
                  <div className="relative leading-[16px]">23.03.2024</div>
                </div>
              </div>
              <div className="w-[303px] flex flex-col items-start justify-start py-0 px-4 box-border gap-[8px] text-xl">
                <div className="w-[254px] relative leading-[20px] font-semibold flex items-center">
                  Прошёл финал Хардатона «Инженерный вызов» — масштабных
                  соревнований по робототехнике
                </div>
                <div className="flex flex-row items-start justify-start gap-[16px] text-base text-royalblue">
                  <div className="relative leading-[20px]">#студентам</div>
                  <div className="relative leading-[20px]">#конкурс</div>
                </div>
              </div>
            </div>
            <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-brand-secondary flex flex-col items-start justify-start pt-0 px-0 pb-3 gap-[12px]">
              <div className="w-[303px] relative h-[200px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-t-2xl rounded-b-none w-[303px] h-[200px] object-cover"
                  alt=""
                  src="/image@2x.png"
                />
                <div className="absolute top-[160px] left-[214px] rounded bg-brand-secondary flex flex-col items-start justify-start py-0.5 px-1">
                  <div className="relative leading-[16px]">Иванов И. И.</div>
                  <div className="relative leading-[16px]">23.03.2024</div>
                </div>
              </div>
              <div className="w-[303px] flex flex-col items-start justify-start py-0 px-4 box-border gap-[8px] text-xl">
                <div className="w-[254px] relative leading-[20px] font-semibold flex items-center">
                  Прошёл финал Хардатона «Инженерный вызов» — масштабных
                  соревнований по робототехнике
                </div>
                <div className="flex flex-row items-start justify-start gap-[16px] text-base text-royalblue">
                  <div className="relative leading-[20px]">#студентам</div>
                  <div className="relative leading-[20px]">#конкурс</div>
                </div>
              </div>
            </div>
            <div className="w-[302px] shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-brand-secondary flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border gap-[12px]">
              <div className="w-[303px] relative h-[200px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-t-2xl rounded-b-none w-[303px] h-[200px] object-cover"
                  alt=""
                  src="/image@2x.png"
                />
                <div className="absolute top-[160px] left-[214px] rounded bg-brand-secondary flex flex-col items-start justify-start py-0.5 px-1">
                  <div className="relative leading-[16px]">Иванов И. И.</div>
                  <div className="relative leading-[16px]">23.03.2024</div>
                </div>
              </div>
              <div className="w-[303px] flex flex-col items-start justify-start py-0 px-4 box-border gap-[8px] text-xl">
                <div className="w-[254px] relative leading-[20px] font-semibold flex items-center">
                  Прошёл финал Хардатона «Инженерный вызов» — масштабных
                  соревнований по робототехнике
                </div>
                <div className="flex flex-row items-start justify-start gap-[16px] text-base text-royalblue">
                  <div className="relative leading-[20px]">#студентам</div>
                  <div className="relative leading-[20px]">#конкурс</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
