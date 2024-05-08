import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ButtonFALSELargeType = {
  /** Style props */
  buttonFALSELargeBackgroundColor?: CSSProperties["backgroundColor"];

  /** Action props */
  onButtonFALSELargeClick?: () => void;
};

const ButtonFALSELarge: FunctionComponent<ButtonFALSELargeType> = ({
  buttonFALSELargeBackgroundColor,
  onButtonFALSELargeClick,
}) => {
  const buttonFALSELargeStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: buttonFALSELargeBackgroundColor,
    };
  }, [buttonFALSELargeBackgroundColor]);

  return (
    <div
      className="h-[72px] cursor-pointer [filter:drop-shadow(0px_15px_36px_rgba(246,_87,_20,_0.3))] rounded-41xl box-border flex flex-col items-center justify-center py-6 px-8 gap-[10px] text-right text-lg text-brand-secondary font-paragraph-p1-bold border-[2px] border-solid border-brand-secondary"
      style={buttonFALSELargeStyle}
      onClick={onButtonFALSELargeClick}
    >
      <b className="relative leading-[24px]">Войти</b>
      <div className="hidden flex-row items-center justify-center">
        <img
          className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
          alt=""
          src="/iconoutlinearrowright.svg"
        />
      </div>
    </div>
  );
};

export default ButtonFALSELarge;
