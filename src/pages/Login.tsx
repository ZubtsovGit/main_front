import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const Login: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-whitesmoke h-[701px] overflow-y-auto text-center text-lg text-brand-primary font-paragraph-p1-bold">
      <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start">
        <img
          className="w-[1440px] relative h-[350.5px] object-cover"
          alt=""
          src="/rectangle@2x.png"
        />
      </div>
      <div className="absolute top-[111px] left-[406px] shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-brand-secondary h-[480px] flex flex-col items-center justify-center py-0 px-16 box-border gap-[48px]">
        <div className="w-[373px] flex flex-col items-center justify-start gap-[16px]">
          <h1 className="m-0 self-stretch relative text-5xl leading-[22px] font-bold font-inherit">
            МГТУ им. Н.Э. Баумана
          </h1>
          <h3 className="m-0 self-stretch relative text-inherit leading-[24px] font-bold font-inherit">
            Кафедра ИУ6
          </h3>
          <h3 className="m-0 self-stretch relative text-inherit leading-[24px] font-bold font-inherit">
            Компьютерные системы и сети
          </h3>
        </div>
        <div className="w-[500px] shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] flex flex-col items-center justify-center">
          <TextField
            className="[border:none] bg-[transparent] self-stretch font-roboto text-base text-brand-primary"
            color="primary"
            label="Адрес электронной почты администратора"
            placeholder="admin@gmail.com"
            variant="outlined"
            type="email"
            sx={{ "& .MuiInputBase-root": { height: "56px" } }}
          />
          <div className="w-2 flex flex-col items-start justify-start">
            <div className="w-px relative h-4" />
          </div>
          <TextField
            className="[border:none] bg-[transparent] self-stretch font-roboto text-base text-brand-primary"
            color="primary"
            label="Пароль"
            placeholder="**********"
            variant="outlined"
            type="password"
            sx={{ "& .MuiInputBase-root": { height: "56px" } }}
          />
          <div className="w-2 flex flex-col items-start justify-start">
            <div className="w-px relative h-4" />
          </div>
          <div className="w-2 flex flex-col items-start justify-start">
            <div className="w-px relative h-4" />
          </div>
          <Button
            className="self-stretch shadow-[0px_1px_5px_rgba(0,_0,_0,_0.12),_0px_2px_2px_rgba(0,_0,_0,_0.14),_0px_3px_1px_-2px_rgba(0,_0,_0,_0.2)]"
            color="primary"
            variant="contained"
            sx={{ borderRadius: "0px 0px 0px 0px" }}
          >
            ВОЙТИ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
