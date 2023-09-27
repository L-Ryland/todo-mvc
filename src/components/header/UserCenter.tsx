import {userCenter, avatar} from "./header.module.css"
import { GlobeAltIcon, Bars3Icon, UserCircleIcon } from "@heroicons/react/24/outline"
const UserCenter = () => {
  return ( 
    <div className={userCenter}>
      <div>Airbnb your home</div>
      <GlobeAltIcon className="h-4" />
      {/* <div>Profile</div> */}
      <div>
        <Bars3Icon className="h-4"/>
        <div className={avatar}>
          <UserCircleIcon className="h-7"/>
        </div>
      </div>
    </div>
   );
}
 
export default UserCenter;