import { FunctionComponent, useState, useCallback } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ButtonFALSELarge from "./ButtonFALSELarge";

const Navbar: FunctionComponent = () => {
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

  const onButtonFALSELargeClick = useCallback(() => {
    navigate("/login");
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

  return (
    <header className="self-stretch bg-royalblue flex flex-row items-center justify-between py-5 px-10 gap-[20px]">
      <img
        className="w-[57px] relative h-[70px] overflow-hidden shrink-0 object-cover"
        alt=""
        src="/logo@2x.png"
      />
      <nav className="m-0 w-[1102px] h-12 flex flex-row items-center justify-between text-right text-lg text-brand-secondary font-paragraph-p1-bold">
        <Link
          className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
          to="/"
          onClick={onLink1Click}
        >
          Главная
        </Link>
        <div className="w-[164px]">
          <Button
            sx={{
              width: 164,
              color: "white",
              fontWeight: "normal",
              textTransform: "none",
              fontSize: "16px",
            }}
            id="button-Абитуриентам"
            aria-controls="menu-Абитуриентам"
            aria-haspopup="true"
            aria-expanded={dropDownBoxOpen ? "true" : undefined}
            onClick={handleDropDownBoxClick}
          >
            Абитуриентам
          </Button>
          <Menu
            anchorEl={dropDownBoxAnchorEl}
            open={dropDownBoxOpen}
            onClose={handleDropDownBoxClose}
          >
            <MenuItem
              onClick={() => {
                handleDropDownBoxClose();
                navigate("/bachlor");
              }}
            >
              Бакалавриат
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleDropDownBoxClose();
                navigate("/magistracy");
              }}
            >
              Магистратура
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleDropDownBoxClose();
                navigate("/postgrad");
              }}
            >
              Аспирантура
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleDropDownBoxClose();
                navigate("/internationalbachelor");
              }}
            >
              Иностранным гражданам
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleDropDownBoxClose();
                navigate("/secondbachelor");
              }}
            >
              Второе высшее
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleDropDownBoxClose();
                navigate("/stepintofuture");
              }}
            >
              Шаг в будущее
            </MenuItem>
          </Menu>
        </div>
        <div className="w-[164px]">
          <Button
            sx={{
              width: 164,
              color: "white",
              fontWeight: "normal",
              textTransform: "none",
              fontSize: "16px",
            }}
            id="button-Деятельность"
            aria-controls="menu-Деятельность"
            aria-haspopup="true"
            aria-expanded={dropDownBox1Open ? "true" : undefined}
            onClick={handleDropDownBox1Click}
            color="primary"
          >
            Деятельность
          </Button>
          <Menu
            anchorEl={dropDownBox1AnchorEl}
            open={dropDownBox1Open}
            onClose={handleDropDownBox1Close}
          >
            <MenuItem
              onClick={() => {
                handleDropDownBoxClose();
                navigate("/disciplines");
              }}
            >
              Дисциплины
            </MenuItem>
          </Menu>
        </div>
        <Link
          className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
          to="/aboutdepartment"
          onClick={onLink1Click}
        >
          О кафедре
        </Link>
        <Link
          className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
          to="/scientificwork"
          onClick={onLink2Click}
        >
          Научная работа
        </Link>
        <Link
          className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
          to="/teachers"
          onClick={onLink3Click}
        >
          Сотрудники
        </Link>
        <Link
          className="cursor-pointer [text-decoration:none] relative leading-[24px] text-[inherit]"
          to="/news"
          onClick={onLink4Click}
        >
          Новости
        </Link>
      </nav>
      <ButtonFALSELarge
        buttonFALSELargeBackgroundColor="transparent"
        onButtonFALSELargeClick={onButtonFALSELargeClick}
      />
    </header>
  );
};

export default Navbar;
