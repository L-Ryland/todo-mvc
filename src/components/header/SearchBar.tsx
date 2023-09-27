import { useCallback, useContext, useState } from "react";
import { MagnifyingGlassCircleIcon as SearchIcon } from "@heroicons/react/24/solid";
import { searchBar } from "./header.module.css";
import { setExpand, useDispatch, useHeaderContext } from "./header.context";
import NavTab from "./NavTab";
import SearchOptions from "./SearchOptions";

const SearchBar = () => {
  // const b = camelC
  const { state, dispatch } = useHeaderContext();
  const handleExpand = useCallback(() => {
    dispatch(setExpand(!state.expand));
    console.log("handleExpand: ", state);
  }, [state]);
  if (!state.expand)
    return (
      <div className={searchBar} onClick={handleExpand}>
        <button>Anywhere</button>
        <button>Any week</button>
        <button>Add guests</button>
        <SearchIcon className="w-8 h-8" />
      </div>
    );
  return (
    <div>
      <div>
        <NavTab className="inline-block">Stays</NavTab>
        <NavTab className="inline-block">Experience</NavTab>
        <NavTab className="inline-block">Online Experiences</NavTab>
      </div>
      <SearchOptions/>
    </div>
  );
};

export default SearchBar;
