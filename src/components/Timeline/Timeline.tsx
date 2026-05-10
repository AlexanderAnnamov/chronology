import styles from './Timeline.module.css'
import {chronology} from "../../constants/chronology.ts";
import {TimelineItem} from "./TimelineItem.tsx";
import {TimelineSeparator} from "./TimelineSeparator.tsx";
export function Timeline() {
  return <div className={styles.container}>

    {chronology.map(({color, type}) => {
      if (type && type === 'Separator') {
        return <TimelineSeparator/>
      }
      return  <TimelineItem color={color}/>
    })}
  </div>
}