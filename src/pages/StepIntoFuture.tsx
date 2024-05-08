import { FunctionComponent, useState, useCallback } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const StepIntoFuture: FunctionComponent = () => {
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
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start text-left text-21xl text-brand-primary font-paragraph-p1-bold">
      <Navbar />
      <div className="self-stretch flex flex-row items-start justify-start py-24 px-[85px]">
        <div className="flex-1 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-brand-secondary flex flex-col items-start justify-start py-[76px] px-16 gap-[24px]">
          <b className="relative leading-[44px] font-heading-h3">
            Шаг в будущее 2022
          </b>
          <div className="self-stretch relative text-base leading-[20px] text-gray-gray50">
            <p className="m-0">15 ноября 2022</p>
            <p className="m-0">Автор текста: Екатерина Карпухина</p>
          </div>
          <img
            className="w-[1140px] relative h-[659px] object-cover"
            alt=""
            src="/step-into-the-future-1@2x.png"
          />
          <div className="self-stretch relative text-lg leading-[24px] text-royalblue">
            <p className="[margin-block-start:0] [margin-block-end:12px]">
              <a
                className="text-[inherit]"
                href="https://olymp.bmstu.ru/ru"
                target="_blank"
              >
                <span>
                  <span className="[text-decoration:underline]">
                    Программа «Шаг в будущее»
                  </span>
                </span>
              </a>
              <span>
                <span>
                   открывает Десятилетие науки и технологий крупнейшими
                  соревнованиями молодых исследователей и разработчиков.
                </span>
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:12px] text-brand-primary">
              <span>
                <span>
                  В период ноября 2022 — января 2023 года программа проводит
                  по всей стране 47 соревнований с участием более 15 тысяч
                  школьников и студентов начальных курсов, имеющих
                  научно-технологические достижения высокого уровня. Девиз
                  соревнований – 
                </span>
                <b className="font-paragraph-p1-bold">
                  «молодые исследователи и разработчики — технологическому
                  суверенитету и лидерству России».
                </b>
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:12px]">
              <span>
                <span>
                  Научно-технологические соревнования программы «Шаг в будущее»
                  имеют стратегическое значение в деле привлечения талантливой
                  молодёжи в сферу исследований и разработок — в решении задачи,
                  поставленной Президентом Российской Федерации Владимиром
                  Путиным в указе об объявлении Десятилетия науки и технологий.
                  Сегодняшние и завтрашние достижения участников соревнований —
                  это залог успешного старта Десятилетия, актив технологического
                  суверенитета и лидерства России.
                </span>
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:12px]">
              <span>
                <span>
                  Реализация программы «Шаг в будущее» является частью
                  Десятилетия науки и технологий в Российской Федерации.
                  Программа включена в состав его важнейшей инициативы «Наука
                  побеждать».
                </span>
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:12px]">
              <span>
                <span>
                  Головные организаторы научно-технологических соревнований
                  программы «Шаг в будущее» — Московский государственный
                  технический университет им. Н.Э. Баумана и Российское
                  молодёжное политехническое общество.
                </span>
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:12px]">
              <span>
                <span>
                  Помощь в подготовке и проведении соревнований оказали
                  Минобрнауки России, Минпросвещения России, Российская академия
                  наук, Национальное агентство развития квалификаций,
                  региональные органы исполнительной власти, ряд других
                  организаций.
                </span>
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:12px]">
              <span>
                <span>
                  В числе научно-технологических соревнований программы «Шаг
                  в будущее» самый представительный уровень имеют
                  Федерально-окружные соревнования молодых исследователей
                  и разработчиков, собирающие со всей страны наиболее
                  талантливых и перспективных молодых людей.
                </span>
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:12px]">
              <span>
                <span>
                  По Сибирскому и Дальневосточному федеральным округам
                  соревнование пройдёт с 14 по 18 ноября, по Приволжскому
                  и Центральному федеральным округам — с 16 по 18 ноября,
                  по Северо-Западному федеральному округу — с 21 по 26 ноября,
                  по Северо-Кавказскому и Южному федеральным округам —
                  с 22 по 25 ноября, по Уральскому федеральному округу —
                  с 22 по 25 ноября.
                </span>
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:12px]">
              <span>
                <span>
                  Организаторами Федерально-окружных соревнований соответственно
                  выступили следующие региональные представительства программы
                  «Шаг в будущее»: Детский технопарк Алтайского края
                  «Кванториум.22», Лицей № 1 «Спутник» г. Самара, Мурманский
                  областной центр дополнительного образования «Лапландия»,
                  Министерство образования и науки Республики Дагестан, Лицей
                  № 11 г. Челябинск. В проведении Соревнования принимают участие
                  научно-исследовательские институты, университеты,
                  высокотехнологичные компании и организации инновационного
                  развития.
                </span>
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:12px]">
              <span>
                <span>
                  В программу научно-технологических соревнований включены
                  конференции, выставки, мастер-классы и консультации ведущих
                  учёных и специалистов, мероприятия научно-технологической
                  подготовки. Основная форма проведения соревнований — защита
                  результатов выполненных исследований и разработок
                  на специализированных секциях и выставочных экспозициях.
                  В жюри соревнований вошли учёные, специалисты, представители
                  организаций реального сектора экономики.
                </span>
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:12px]">
              <span>
                <span>
                  Лучшие из лучших участников соревнований получат путёвку
                  на грандиозное состязание лучших молодых умов планеты —
                  Международный форум научной молодёжи «Шаг в будущее».
                  В марте-апреле 2023 года форум соберёт в Москве цвет мировой
                  молодёжной науки — более 1000 победителей
                  научно-технологических конкурсов из стран Европы, Америки,
                  Азии, Африки, Океании. Форум пройдёт на базе 14 всемирно
                  известных научно-исследовательских институтов и 13 ведущих
                  российских университетов.
                </span>
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:12px]">
              <span>
                <span>
                  Для научно-технологической подготовки участников форума,
                  соревнований, а также учащихся, интересующихся наукой
                  и техникой, программа «Шаг в будущее» организовала работу
                  Всероссийской дистант-школы «Научно-технологические лидеры
                  будущего». В период ноября-декабря пройдут 26 интерактивных
                  вебинаров дистант-школы с участием учёных и специалистов,
                  докторов и кандидатов наук, имеющих продолжительный опыт
                  работы с молодыми исследователями и разработчиками.
                </span>
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:12px]">
              <span>
                <span>В программе «Шаг в будущее» ежегодно участвуют </span>
                <b className="font-paragraph-p1-bold">
                  более 150 тысяч талантливых школьников и студентов.
                </b>
                <span>
                  {" "}
                  С программой сотрудничают 69 научных институтов
                  и конструкторских бюро, 118 вузов, 90 промышленных
                  предприятий, 132 энергетические, горнодобывающие, торговые
                  и транспортные компании, 11 заповедников и ботанических садов,
                  16 медицинских центров и частных клиник, 23 библиотеки, музея,
                  театра и архива.
                </span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span>
                  Дополнительную информацию можно получить в Секретариате
                  программы «Шаг в будущее» 
                </span>
              </span>
              <a
                className="text-[inherit]"
                href="tel:(499) 267-55-52"
                target="_blank"
              >
                <span>
                  <span>
                    <span className="[text-decoration:underline]">
                      (499) 267-55-52
                    </span>
                  </span>
                </span>
              </a>
              <span>
                <span>, </span>
              </span>
              <a
                className="text-[inherit]"
                href="tel:263-73-60-60"
                target="_blank"
              >
                <span>
                  <span>
                    <span className="[text-decoration:underline]">
                      263-73-60-60
                    </span>
                  </span>
                </span>
              </a>
              <span>
                <span className="text-brand-primary">, а также на </span>
              </span>
              <a
                className="text-[inherit]"
                href="https://olymp.bmstu.ru/ru"
                target="_blank"
              >
                <span>
                  <span className="[text-decoration:underline] text-royalblue">
                    сайте
                  </span>
                </span>
              </a>
              <span>
                <span className="text-brand-primary">
                   программы «Шаг в будущее».
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepIntoFuture;
