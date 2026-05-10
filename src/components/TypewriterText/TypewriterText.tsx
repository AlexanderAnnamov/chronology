import {useEffect, useState} from "react";
import styles from "./TypewriterText.module.css";

type TypewriterTextProps = {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  cursor?: string;
  loop?: boolean;
};

export function TypewriterText({
                                 text,
                                 speed = 50,
                                 startDelay = 0,
                                 className,
                                 cursor = "|",
                                 loop = false,
                               }: TypewriterTextProps) {
  const [visibleText, setVisibleText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setVisibleText("");
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index === 0 && startDelay > 0) {
      const delayTimeout = window.setTimeout(() => {
        setIndex(1);
        setVisibleText(text.charAt(0));
      }, startDelay);

      return () => window.clearTimeout(delayTimeout);
    }

    if (index >= text.length) {
      if (!loop) return;

      const restartTimeout = window.setTimeout(() => {
        setVisibleText("");
        setIndex(0);
      }, 1500);

      return () => window.clearTimeout(restartTimeout);
    }

    const timeout = window.setTimeout(() => {
      setVisibleText((prev) => prev + text.charAt(index));
      setIndex((prev) => prev + 1);
    }, speed);

    return () => window.clearTimeout(timeout);
  }, [index, text, speed, startDelay, loop]);

  return (
    <span className={`${styles.typewriter} ${className ?? ""}`} style={{color: '#c4c4c4', lineHeight: 1.2}}>
      {visibleText}
      <span className={styles.cursor}>{cursor}</span>
    </span>
  );
}