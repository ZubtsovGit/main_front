import { FunctionComponent, useState, useCallback } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Postgrad: FunctionComponent = () => {
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
    <div className="w-full relative bg-whitesmoke h-[701px] overflow-y-auto flex flex-col items-center justify-end pt-0 px-0 pb-24 box-border gap-[96px] text-left text-21xl text-brand-primary font-heading-h3">
      <Navbar />
      <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-brand-secondary overflow-hidden shrink-0 flex flex-row items-center justify-start py-10 px-4 gap-[18px]">
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <div className="flex flex-row items-center justify-center py-0 px-6">
            <b className="relative leading-[44px]">
              Всё о поступлении на аспирантуру
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
            <div className="w-[879px] bg-brand-secondary flex flex-col items-start justify-start">
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
                        Информатика и вычислительная техника
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
                        09.06.01
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
                        очная / заочная
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
                        4 года / 5 лет
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[840px] overflow-hidden hidden flex-row items-start justify-start">
                  <div className="self-stretch w-[253px] box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-gray-gray50 border-l-[1px]">
                    <img
                      className="w-[105px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                      alt=""
                      src="/frame-2.svg"
                    />
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[7px] px-2">
                      <div className="self-stretch relative leading-[20px]">
                        Интеллектуальные системы анализа, обработки и
                        интерпретации больших данных
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
                        09.04.01/07
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
                        2 года
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[840px] overflow-hidden hidden flex-row items-start justify-start">
                  <div className="self-stretch w-[253px] box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-gray-gray50 border-l-[1px]">
                    <img
                      className="w-[105px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                      alt=""
                      src="/frame-2.svg"
                    />
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[7px] px-2">
                      <div className="self-stretch relative leading-[20px]">
                        Интеллектуальный анализ больших данных в системах
                        поддержки принятия решений
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
                        09.04.01/12
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
                        2 года
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[840px] overflow-hidden hidden flex-row items-start justify-start">
                  <div className="self-stretch w-[253px] box-border flex flex-col items-start justify-start border-t-[1px] border-solid border-gray-gray50 border-l-[1px]">
                    <img
                      className="w-[105px] relative max-w-full overflow-hidden h-0 shrink-0 hidden"
                      alt=""
                      src="/frame-2.svg"
                    />
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[7px] px-2">
                      <div className="self-stretch relative leading-[20px]">
                        Высоконагруженные корпоративные информационные системы
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
                        09.04.01/14
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
                        2 года
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[879px] bg-brand-secondary flex flex-col items-start justify-start">
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
          </div>
        </div>
        <img
          className="w-[341px] relative h-[304px] object-cover"
          alt=""
          src="/postgraduate-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Postgrad;
