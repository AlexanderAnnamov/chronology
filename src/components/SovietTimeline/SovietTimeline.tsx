import WordCloud from "./WordCloud.tsx";
import period_1_1 from '../../assets/placats/period_1/unnamed.png'
import period_1_2 from '../../assets/placats/period_1/unnamed2.png'
import period_1_3 from '../../assets/placats/period_1/unnamed3.png'

import period_2_1 from '../../assets/placats/period_2/unname1.png'
import period_2_2 from '../../assets/placats/period_2/unname2.png'
import period_2_3 from '../../assets/placats/period_2/unname3.png'

import period_3_1 from '../../assets/placats/period_3/unnam1.png'
import period_3_2 from '../../assets/placats/period_3/unnam2.png'
import period_3_3 from '../../assets/placats/period_3/unnam3.png'

import period_4_1 from '../../assets/placats/period_4/unna1.png'
import period_4_2 from '../../assets/placats/period_4/unna2.png'
import period_4_3 from '../../assets/placats/period_4/unna3.png'

import period_5_1 from '../../assets/placats/period_5/unn1.png'
import period_5_2 from '../../assets/placats/period_5/unn2.png'
import period_5_3 from '../../assets/placats/period_5/unn3.png'
import {useState} from "react";
import Modal from "../Modal/Modal.tsx";

const periods = [
  {
    id: 1,
    side: "right",
    year: "1917-1922",
    title: "революция\nвойна\nтоварищ",
    subtitle: "",
    color: "#ff4050",
    glow: "rgba(255, 28, 55, 0.42)",
    top: 12,
    posters: ["Да здравствует", "Знание — сила", "Запорожец"],
    images: [period_1_1, period_1_2, period_1_3],
    button: "подробнее",
    history: 'Период Октябрьской революции, Гражданской войны и политики «военного коммунизма». Большевики установили однопартийную диктатуру. Страна была расколота на множество фронтов, в экономике царили разруха и карточная система. К концу периода власть перешла к НЭПу.',
    conclusion: 'Лексика классовой борьбы («красный», «рабочий», «крестьянин») отражает ставку большевиков на рабочих и крестьян как опору власти в условиях войны, а 73,5% красного и тёмные фиолетовые оттенки передают суровую эстетику военного времени.'
    ,
    words: [
      "красная армия",
      "новый человек",
      "советская власть",
      "разгром белых",
      "будни революции",
      "борьба с врагами",
      "герои",
      "красный свет",
      "мир труд",
      "диктатура пролетариата",
      "рабочий",
      "крестьянин",
      "солдат",
    ],
  },
  {
    id: 2,
    side: "left",
    year: "1923-1929",
    title: "работа\nстроительство\nколхоз",
    subtitle: "",
    color: "#368eff",
    glow: "rgba(30, 105, 255, 0.36)",
    top: 35,
    posters: ["Читай книги", "Всем, всем, всем", "Актив"],
    images: [period_2_1, period_2_2, period_2_3],
    button: "подробнее",
    history: 'Эпоха НЭПа с временным допущением рыночных механизмов. После смерти Ленина (1924) развернулась внутрипартийная борьба, завершившаяся разгромом оппозиций и концентрацией власти у Сталина. Время относительной стабилизации и культурного плюрализма.',
    conclusion: 'Слово «режиссёр» стало уникальным маркером культурного подъёма и расцвета театра и кино в годы НЭПа, а возросшая доля синего (5,1%) связана с влиянием конструктивизма и художественного плюрализма 1920-х.'
    ,
    words: [
      "новая экономическая",
      "политика",
      "социалистическое строительство",
      "ударник труда",
      "колхозная весна",
      "культура",
      "ликбез",
      "город",
      "завод",
      "политика",
      "школа",
      "страна",
      "пятилетка",
      "романтизм",
      "стремление",
      "колхоз",
    ],
  },
  {
    id: 3,
    side: "right",
    year: "1930-1939",
    title: "пятилетка\nколхоз\nсоциализм",
    subtitle: "",
    color: "#ff5353",
    glow: "rgba(255, 40, 40, 0.38)",
    images: [period_3_1, period_3_2, period_3_3],
    top: 62,
    posters: ["Больше металла", "Выполним пятилетку", "Колхозники"],
    button: "подробнее",
    history: 'Период форсированной индустриализации, коллективизации и массовых репрессий (Большой террор 1937–1938). Государство стало предельно централизованным, культ личности Сталина оформился окончательно.',
    conclusion: 'Выход на первый план слов «Сталин», «СССР» и жёстко нормированная палитра (78% красного) отражают завершение формирования культа личности и утверждение единого идеологического канона в эпоху индустриализации.'
    ,
    words: [
      "пятилетка",
      "план",
      "выполним пятилетку",
      "трудовая дисциплина",
      "колхоз новый",
      "строительство фабрик",
      "заводы гиганты",
      "мы сталь",
      "механизатор",
      "ударники труда",
      "новая жизнь",
      "стахановец",
      "победа",
      "труд",
    ],
  },
  {
    id: 4,
    side: "left",
    year: "1940-1945",
    title: "война\nродина\nфронт",
    subtitle: "",
    color: "#6fed58",
    glow: "rgba(56, 220, 60, 0.36)",
    top: 86,
    images: [period_4_1, period_4_2, period_4_3],
    posters: ["Родина-мать зовёт", "Всё для фронта", "Дойдем до Берлина"],
    button: "подробнее",
    history: 'Великая Отечественная война (1941–1945) стала тяжелейшим испытанием и завершилась победой СССР. Страна понесла колоссальные людские и материальные потери (около 27 млн погибших) и превратилась в сверхдержаву.',
    conclusion: 'Доминирование слов «враг» и «фашистский» прямо связано с мобилизацией на борьбу с нацистской Германией, а падение красного до 70,6% и рост зеленого и голубого — с необходимостью реалистичного изображения техники и неба.'
    ,
    words: [
      "великая отечественная",
      "всё для фронта",
      "всё для победы",
      "бей врага",
      "смерть фашистам",
      "ни шагу назад",
      "защита родины",
      "герои советской",
      "победа",
      "защита",
      "смерть",
      "свой",
      "герои",
      "фашизм",
      "сила",
      "вместе",
    ],
  },
  {
    id: 5,
    side: "right",
    year: "1946-1953",
    title: "мир\nтруд\nпобеда",
    subtitle: "",
    color: "#ffa51f",
    glow: "rgba(255, 170, 25, 0.34)",
    top: 110,
    images: [period_5_1, period_5_2, period_5_3],
    posters: ["Слава труду", "Мир! Труд! Май!", "Наше дело правое"],
    button: "подробнее",
    history: 'Послевоенное восстановление при приоритете тяжёлой промышленности и низком уровне жизни. Начало Холодной войны и новая волна репрессий. Смерть Сталина в 1953 году завершила эпоху единоличной диктатуры.',
    conclusion: 'Слово «мир» выходит на первое место как реакция на потери войны и запрос на восстановление, а рекордный красный (82,2%) и резкий скачок жёлтого совмещают усиление идеологического контроля с визуальным маркером урожая и «золотого века».'
    ,
    words: [
      "мирный труд",
      "восстановление хозяйства",
      "свет труда",
      "счастливое будущее",
      "мир",
      "низкие цены",
      "уверенность в будущем",
      "новая техника",
      "развитие страны",
      "счастливые люди",
      "слава",
      "народ",
      "труд",
      "страна",
      "развитие",
    ],
  },
];

function Poster({url}: any) {
  return (
    <div className="poster">
      <img src={url} alt=""/>
      <div className="posterVeil"/>
    </div>
  );
}

function TimelineRow({item}: { item: any }) {
  const [modal, setModal] = useState(false);
  const isRight = item.side === "right";
  const id = item?.id;

  const getLeftDot = () => {
    switch (id) {
      case 1:
        return -5;
      case 2:
        return 137;
      case 3:
        return 12;
      case 4:
        return 150;
      case 5:
        return 3;
      default:
        0
    }
  }

  return (<>
      <Modal setOpen={setModal} open={modal} title={item.year} posterUrls={item.images} historyText={item.history} conclusionText={item.conclusion} periodNumber={item.id}/>
      <section
        className={`row ${isRight ? "right" : "left"}`}
        style={{
          top: `${item.top}%`,
          "--accent": item.color,
          "--glow": item.glow
        } as React.CSSProperties & Record<'--accent', string>}
      >
        <div className="visualBlock">
          <div className="halo"/>
          <div className="posters">
            {item?.images && item?.images.map((img: any, index: any) => (
              <Poster key={img} index={index + item.id} url={img}/>
            ))}
          </div>
          <button className="more" onClick={() => setModal(true)}>{item.button}</button>
        </div>

        <div className="cloudBlock" style={{marginLeft: isRight ? 105 : -240}}>
          <WordCloud words={item.words} color={item.color}/>
        </div>

        <div className="yearBlock">
          <div className="dot" style={{left: getLeftDot()}}/>
          <div style={{marginLeft: isRight ? 10 : 20}}>
            <div className="year" style={{width: 100}}>{item.year}</div>
            <p style={{fontSize: 12, lineHeight: 1.4, fontWeight: 400}}>{item.subtitle}</p>

          </div>

        </div>

        <div className="titleBlock" style={{marginLeft: isRight ? 120 : -120}}>
          {item.title.split("\n").map((line: any) => (
            <div key={line}>{line}</div>
          ))}
        </div>
      </section>
    </>

  );
}

export default function SovietTimeline() {
  return (
    <main className="page">
      <div className="timelineCard">
        <svg className="curve" viewBox="0 0 100 900" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff2b43"/>
              <stop offset="20%" stopColor="#ff7a8b"/>
              <stop offset="42%" stopColor="#b7c4ff"/>
              <stop offset="62%" stopColor="#ff5b5b"/>
              <stop offset="78%" stopColor="#6ff75c"/>
              <stop offset="100%" stopColor="#ffb21b"/>
            </linearGradient>
            <filter id="lineGlow" x="-120%" y="-10%" width="340%" height="120%">
              <feGaussianBlur stdDeviation="3.2" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <clipPath id="cutTopLine">
              <rect x="0" y="132" width="100" height="920"/>
            </clipPath>
          </defs>
          <g clipPath="url(#cutTopLine)">
            <path
              d="M50 0 C16 84 44 139 55 194 C71 274 17 342 39 423 C60 505 74 549 45 641 C20 719 67 781 53 850 C45 909 50 957 50 1000"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3.4"
              strokeLinecap="round"
              filter="url(#lineGlow)"
            />
            <path
              d="M50 0 C16 84 44 139 55 194 C71 274 17 342 39 423 C60 505 74 549 45 641 C20 719 67 781 53 850 C45 909 50 957 50 1000"
              fill="none"
              stroke="rgba(255,255,255,.86)"
              strokeWidth="1.15"
              strokeLinecap="round"
            />
          </g>
        </svg>

        {periods.map((item) => (
          <TimelineRow key={item.id} item={item}/>
        ))}

        {/*<footer className="legend">*/}
        {/*  <div className="legendItem">*/}
        {/*    <span className="legendIcon redBox">A</span>*/}
        {/*    <div>*/}
        {/*      <b>топ слов</b>*/}
        {/*      <small>наиболее частотные слова периода</small>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className="legendItem">*/}
        {/*    <span className="legendIcon redBox">99</span>*/}
        {/*    <div>*/}
        {/*      <b>топ биграмм</b>*/}
        {/*      <small>наиболее частые сочетания слов</small>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className="legendItem">*/}
        {/*    <span className="legendIcon imageBox" />*/}
        {/*    <div>*/}
        {/*      <b>плакаты</b>*/}
        {/*      <small>ключевые визуальные кластеры периода</small>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</footer>*/}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; }

        body {
          margin: 0;
          background: #030507;
        }

        .page {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 18px;
          background:
            radial-gradient(circle at 50% 0%, rgba(80, 0, 20, .35), transparent 30%),
            radial-gradient(circle at 50% 100%, rgba(80, 60, 0, .22), transparent 34%),
            #030507;
          font-family: Oswald, Impact, 'Arial Narrow', sans-serif;
        }

        .timelineCard {
          position: relative;
          width: min(100%, 1024px);
          aspect-ratio: 706 / 768;
          border-radius: 2px;
          background:
            radial-gradient(circle at 22% 10%, rgba(158, 0, 25, .34), transparent 19%),
            radial-gradient(circle at 77% 30%, rgba(9, 80, 165, .32), transparent 21%),
            radial-gradient(circle at 74% 53%, rgba(140, 0, 0, .28), transparent 22%),
            radial-gradient(circle at 25% 70%, rgba(0, 115, 35, .26), transparent 21%),
            radial-gradient(circle at 75% 90%, rgba(150, 95, 0, .24), transparent 21%),
            linear-gradient(180deg, #020306 0%, #05070b 48%, #040506 100%);
          box-shadow: 0 24px 80px rgba(0,0,0,.7), inset 0 0 80px rgba(0,0,0,.65);
        }

        .timelineCard::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.014) 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: .22;
          pointer-events: none;
        }

        .curve {
          position: absolute;
          z-index: 5;
          left: 47.8%;
          top: -1.5%;
          width: 8.5%;
          height: 101.5%;
          overflow: visible;
        }

        .row {
          position: absolute;
          z-index: 10;
          left: 0;
          width: 100%;
          height: 18.2%;
          transform: translateY(-50%);
          display: grid;
          align-items: center;
          pointer-events: none;
        }

        .row.right {
          grid-template-columns: 39% 12% 12% 16% 20%;
          grid-template-areas: '. line year title cloud';
        }

        .row.left {
          grid-template-columns: 20% 17% 12% 16% 39%;
          grid-template-areas: 'cloud title year line visual';
        }

        .row.right .visualBlock {
          grid-column: 1;
          justify-self: center;
        }

        .row.left .visualBlock {
          grid-area: visual;
          justify-self: center;
        }

        .visualBlock {
          position: relative;
          width: 120%;
          min-width: 180px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 9px;
        }

        .halo {
          position: absolute;
          inset: -25% -18%;
          z-index: -1;
          background: radial-gradient(ellipse at center, var(--glow), transparent 67%);
          filter: blur(6px);
        }

        .posters {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .poster {
          position: relative;
          aspect-ratio: 57 / 80;
          overflow: hidden;
          border: 1px solid color-mix(in srgb, var(--accent) 55%, white 15%);
          background: #111;
          box-shadow: 0 0 13px rgba(0,0,0,.7);
        }

        .poster img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .posterVeil {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255, 25, 0, .17), rgba(120, 0, 0, .22));
          mix-blend-mode: color;
        }

        .poster span {
          position: absolute;
          left: 5px;
          right: 5px;
          top: 4px;
          text-align: center;
          color: #f7d64c;
          font-size: clamp(7px, 1.05vw, 10px);
          line-height: .94;
          text-transform: uppercase;
          font-weight: 700;
          text-shadow: 0 1px 1px #000;
        }

        .more {
          min-width: 58px;
          padding: 6px 12px;
          border: 1px solid color-mix(in srgb, var(--accent) 55%, transparent);
          border-radius: 6px;
          background: rgba(20, 20, 25, .55);
          color: color-mix(in srgb, var(--accent) 80%, white 20%);
          font-family: inherit;
          font-size: 14px;
          line-height: 18px;
          pointer-events: auto;
          box-shadow: 0 0 16px color-mix(in srgb, var(--accent) 30%, transparent);
          cursor: pointer;
        }
        
        .more:hover {
          transform: scale(1.2);
        }

        .cloudBlock {
          grid-area: cloud;
          align-self: center;
          justify-self: stretch;
        }

        .wordCloud {
          position: relative;
          width: 100%;
          height: 200px;
        }

        .w {
          position: absolute;
          display: inline-block;
          white-space: nowrap;
          font-weight: 500;
          line-height: 1;
        }

        .w1 { left: 16%; top: 34%; font-size: clamp(21px, 3vw, 34px); font-weight: 700; }
        .w2 { left: 35%; top: 15%; font-size: clamp(14px, 1.8vw, 20px); }
        .w3 { left: 7%; top: 5%; font-size: clamp(9px, 1.2vw, 13px); }
        .w4 { left: 2%; top: 70%; font-size: clamp(9px, 1.2vw, 13px); }
        .w5 { left: 48%; top: 58%; font-size: clamp(12px, 1.55vw, 17px); }
        .w6 { left: 58%; top: 30%; font-size: clamp(10px, 1.25vw, 14px); }
        .w7 { left: 23%; top: 82%; font-size: clamp(9px, 1.15vw, 13px); }
        .w8 { left: 72%; top: 72%; font-size: clamp(9px, 1.15vw, 12px); }
        .w9 { left: 69%; top: 8%; font-size: clamp(9px, 1.15vw, 12px); }

        .titleBlock {
          grid-area: title;
          justify-self: center;
          text-align: center;
          color: var(--accent);
          font-size: clamp(24px, 3.5vw, 40px);
          line-height: .96;
          font-weight: 700;
          letter-spacing: .035em;
          text-transform: uppercase;
          text-shadow: 0 0 18px var(--glow);
        }

        .yearBlock {
          grid-area: year;
          position: relative;
          min-width: 96px;
          color: white;
          z-index: 20;
          align-self: center;
        }

        .row.right .yearBlock { padding-left: 24px; text-align: left; }
        .row.left .yearBlock { padding-right: 24px; text-align: right; }

        .dot {
          position: absolute;
          top: 50%;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 3px solid white;
          background: var(--accent);
          box-shadow: 0 0 15px var(--accent), 0 0 2px white inset;
          transform: translateY(-50%);
        }

        .row.right .dot { left: -7px; }
        .row.left .dot { right: -7px; }

        .year {
          font-size: clamp(15px, 1.9vw, 22px);
          line-height: 1;
          font-weight: 700;
          letter-spacing: .015em;
          margin-bottom: 8px;
        }

        .yearBlock p {
          margin: 0;
          color: rgba(255,255,255,.72);
          font-family: Arial, sans-serif;
          font-size: clamp(7px, .92vw, 10px);
          line-height: 1.35;
          font-weight: 600;
        }

        .legend {
          position: absolute;
          z-index: 30;
          left: 6.2%;
          right: 6.2%;
          bottom: 3.1%;
          height: 55px;
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 8px;
          background: rgba(3, 6, 10, .72);
          box-shadow: inset 0 0 18px rgba(255,255,255,.03), 0 0 22px rgba(0,0,0,.7);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          align-items: center;
          padding: 0 22px;
          gap: 18px;
        }

        .legendItem {
          display: flex;
          align-items: center;
          gap: 13px;
          min-width: 0;
        }

        .legendIcon {
          width: 25px;
          height: 25px;
          flex: 0 0 25px;
          display: grid;
          place-items: center;
          border-radius: 2px;
          font-size: 14px;
          line-height: 1;
          font-weight: 700;
        }

        .redBox {
          border: 1px solid #cd1d22;
          color: #ff3838;
          background: rgba(110,0,0,.18);
        }

        .imageBox {
          position: relative;
          border: 1px solid rgba(255,255,255,.75);
          background: rgba(255,255,255,.04);
        }

        .imageBox::before {
          content: '';
          position: absolute;
          left: 5px;
          right: 5px;
          bottom: 6px;
          height: 9px;
          border-left: 1px solid rgba(255,255,255,.9);
          border-bottom: 1px solid rgba(255,255,255,.9);
          transform: skewX(-18deg);
        }

        .legend b,
        .legend small {
          display: block;
          white-space: nowrap;
        }

        .legend b {
          color: rgba(255,255,255,.78);
          font-size: 11px;
          line-height: 1.15;
          text-transform: uppercase;
          letter-spacing: .08em;
        }

        .legend small {
          color: rgba(255,255,255,.42);
          font-family: Arial, sans-serif;
          font-size: 8px;
          line-height: 1.2;
        }

        @media (max-width: 720px) {
          .page { padding: 0; }
          .timelineCard { width: 100vw; border-radius: 0; }
          .visualBlock { min-width: 0; width: 92%; gap: 6px; }
          .posters { gap: 5px; }
          .more { height: 17px; min-width: 48px; font-size: 8px; line-height: 15px; padding: 0 7px; }
          .yearBlock { min-width: 70px; }
          .row.right .yearBlock { padding-left: 16px; }
          .row.left .yearBlock { padding-right: 16px; }
          .dot { width: 11px; height: 11px; border-width: 2px; }
          .row.right .dot { left: -5.5px; }
          .row.left .dot { right: -5.5px; }
          .legend { height: 45px; left: 4%; right: 4%; padding: 0 10px; gap: 8px; }
          .legendItem { gap: 7px; }
          .legendIcon { width: 20px; height: 20px; flex-basis: 20px; font-size: 11px; }
          .legend b { font-size: 8px; }
          .legend small { font-size: 6px; }
        }
      `}</style>
    </main>
  );
}
