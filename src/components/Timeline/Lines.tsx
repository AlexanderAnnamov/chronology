import styles from "./Lines.module.css";
import {Page} from "../ui/Page/Page.tsx";
import {TypewriterText} from "../TypewriterText/TypewriterText.tsx";

const timelineItems = [
  {
    title: "1917—1922",
    text: "Ра па па па пам па па па па пам",
    side: "right",
    cardColor: "rgba(255, 90, 90, 0.35)",
    lineColor: "#ff6b6b",
  },
  {
    title: "1923—1929",
    text: "Ра па па па пам па па па па пам",
    side: "left",
    cardColor: "rgba(255, 221, 87, 0.35)",
    lineColor: "#facc15",
  },
  {
    title: "1930—1939",
    text: "Ра па па па пам па па па па пам",
    side: "right",
    cardColor: "rgba(255, 170, 90, 0.35)",
    lineColor: "#fb923c",
  },
  {
    title: "1940—1945",
    text: "Ра па па па пам па па па па пам",
    side: "left",
    cardColor: "rgba(91,255,236,0.35)",
    lineColor: "green",
  },
  {
    title: "1946—1953",
    text: "Ра па па па пам па па па па пам",
    side: "right",
    cardColor: "rgba(124,73,255,0.35)",
    lineColor: "green",
  },


];

const TIMELINE_WIDTH = 1000;
const START_Y = 80;
const GAP_Y = 700;

function getPoint(index: number) {
  const y = START_Y + index * GAP_Y;
  const xByIndex = [610, 385, 610, 385, 610, 430];

  return {
    x: xByIndex[index % xByIndex.length],
    y,
  };
}

function createCurvePath(from: any, to: any) {
  const middleY = (from.y + to.y) / 2;

  const c1x = from.x ;
  const c1y = middleY;

  const c2x = to.x;
  const c2y = middleY;

  return `M ${from.x} ${from.y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${to.x} ${to.y}`;
}

function getCardClassName(side: string) {
  if (side === "left") {
    return `${styles.timelineCard} ${styles.timelineCardLeft}`;
  }

  if (side === "center") {
    return `${styles.timelineCard} ${styles.timelineCardCenter}`;
  }

  return `${styles.timelineCard} ${styles.timelineCardRight}`;
}

export function Lines() {
  const points = timelineItems.map((_, index) => getPoint(index));
  const height = START_Y * 2 + (timelineItems.length - 1) * GAP_Y;

  return (
    <Page>

    <section className={styles.curvedTimeline}>
      <svg
        className={styles.curvedTimelineSvg}
        viewBox={`0 0 ${TIMELINE_WIDTH} ${height}`}
        preserveAspectRatio="xMidYMin meet"
        aria-hidden="true"
      >
        <defs>
          <filter id="lineGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {points.slice(0, -1).map((point, index) => {
          const nextPoint = points[index + 1];

          return (
            <path
              key={index}
              d={createCurvePath(point, nextPoint)}
              stroke={timelineItems[index].lineColor}
              className={styles.curvedTimelinePath}
              filter="url(#lineGlow)"
            />
          );
        })}

        {points.map((point, index) => (
          <g key={index}>
            <circle
              cx={point.x}
              cy={point.y}
              r="16"
              fill='white'
            />
            <circle
              cx={point.x}
              cy={point.y}
              r="7"
              className={styles.curvedTimelineDot}
            />
          </g>
        ))}
      </svg>

      <div className={styles.curvedTimelineContent} style={{ height }}>
        {timelineItems.map((item, index) => {
          const point = points[index];

          return (
            <>
              <article
                key={item.title}
                className={getCardClassName(item.side === 'left' ? 'right' : 'left')}
                style={
                  {
                    top: point.y,
                  } as React.CSSProperties
                }
              >
                <div style={{position: 'absolute', left: -20, top: -70}}>
                  <TypewriterText
                    text="Период Октябрьской революции, Гражданской войны и политики «военного коммунизма». Большевики установили однопартийную диктатуру. Страна была расколота на множество фронтов, в экономике царили разруха и карточная система. К концу периода власть перешла к НЭПу.

"
                    speed={20}
                    startDelay={300}
                  />
                </div>

              </article>

            <article
              key={item.title}
              className={getCardClassName(item.side)}
              style={
                {
                  top: point.y,
                  "--card-bg": item.cardColor,
                  "--accent-color": item.lineColor,
                } as React.CSSProperties
              }
            >
              <h3 style={{fontSize: 24}}>{item.title}</h3>
              <p>{item.text}</p>
              <div style={{position: 'relative'}}>
                <div style={{position: 'absolute', left: -20, top: 40, fontSize: 24}}>
                  Красный
                </div>
                <div style={{position: 'absolute', left: 100, top: 200, fontSize: 24}}>
                  Красный
                </div>
                <div style={{position: 'absolute', left: 200, top: -200, fontSize: 24}}>
                  Красный
                </div>
              </div>
            </article>
            </>


          );
        })}
      </div>
    </section>
    </Page>

  );
}