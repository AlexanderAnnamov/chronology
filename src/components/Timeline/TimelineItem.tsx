import styles from './TimelineItem.module.css'
import * as React from "react";

interface Props {
  color?: string
}

export const TimelineItem: React.FC<Props>  = ({color}) => {
  return (
   <div className={styles.container} style={{backgroundColor: color}}>
     <div style={{height: 400, width: 2, backgroundColor: '#ad50c9'}}></div>
   </div>
  );
}
