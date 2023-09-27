import React, { Fragment, useCallback, useRef } from "react";
import {Transition} from "@headlessui/react";
import {useClickAway} from "react-use"

import { Button } from "@/components/header/Button";
import { header, expanded } from "./header.module.css";
import Logo from "@/assets/react.svg";
import { cx } from "@emotion/css";
import SearchBar from "./SearchBar";
import UserCenter from "./UserCenter";
import {
  Provider,
  useDispatch,
  setExpand,
} from "./header.context";
type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}
export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => {
  const [state, dispatch] = useDispatch();
  const handleExpand = useCallback(() => {
    dispatch(setExpand(true));
    console.log("handleExpand: ", state);
  }, [state]);
  const headerRef = useRef<HTMLDivElement>(null);
  useClickAway(headerRef, () => {
    dispatch(setExpand(false));
  })
  return (
    <Provider value={{ state, dispatch }}>
      {/* <header> */}
        <div className={cx(header, { [expanded]: state.expand })} ref={headerRef}>
          <div>
            <img src={Logo} alt="" />
          </div>
          <div>
            <SearchBar />
          </div>
          <UserCenter />
        </div>
      {/* </header> */}
      <Transition
          as={Fragment}
          show={state.expand}
          enter="transform transition-transform duration-300"
          enterFrom="opacity-0 -translate-y-full"
          enterTo="opacity-100 translate-y-0"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-95 "
        >
          <div className="h-40 w-full rounded-md bg-white shadow-lg" />
        </Transition>
        
    </Provider>
  );
};
