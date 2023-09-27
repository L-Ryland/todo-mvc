import { ReactNode } from "react";
import {cx} from "@emotion/css"
import {activeTab, navItem} from "./header.module.css"
interface NavTabProps {
  children: ReactNode,
  active?: boolean,
  className?: string,
}
const NavTab: React.FC<NavTabProps> = ({children, active, className}) => {
  return ( 
    <button className={cx(navItem, className)}>
      <div className={cx({[activeTab]: active})}>
        <span>{children}</span>
      </div>
    </button>
   );
}
 
export default NavTab;