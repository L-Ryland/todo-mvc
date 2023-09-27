import { Fragment } from "react";
import { searchTabs } from "./header.module.css";
import SearchTab from "./SearchTab";

const SearchOptions = () => {
  return ( 
    <Fragment>
      <div className={searchTabs}>
        {/* <SearchTab/> */}
      </div>
    </Fragment>
   );
}
 
export default SearchOptions;