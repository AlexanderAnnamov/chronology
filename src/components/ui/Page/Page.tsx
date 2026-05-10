import * as React from "react";
import styles from './Page.module.css'

interface Props extends React.PropsWithChildren {

}

export const Page: React.FC<Props> = ({children}) => {
  return <div className={styles.container}>
    {children}
  </div>
}