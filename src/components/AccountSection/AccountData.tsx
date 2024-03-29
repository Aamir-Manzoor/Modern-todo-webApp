import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";
import LayoutMenus from "../Utilities/LayoutMenus";
import { GameHooks } from "./HookState";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { ReactComponent as Close } from "../../assets/x.svg";
import { ReactComponent as GameBar } from "../../assets/gameboy.svg";
import { ReactComponent as TicTac } from "../../assets/tic-tac-toe.svg";
import { ReactComponent as GameIcon2048 } from "../../assets/2048.svg";
import Weather from "../../Weather/WeatherApp";

import { ElseIf, If } from "../Service/condition";

const AccountData: React.FC = () => {
  const menuOpen = useAppSelector((state) => state.menu.menuAccountOpened);

  const dispatch = useAppDispatch();

  const [GameState, GameSet] = useState({
    game: "none",
    parentDiv: "DontShow",
  });
  GameHooks.GameState = GameState;
  GameHooks.GameSet = GameSet;

  const closeMenuHandler = () => {
    dispatch(menusActions.closeMenuAccount());
  };
  setTimeout(() => {
    localStorage.setItem("Alert", JSON.stringify("Showed"));
  }, 2000);

  function ClassSwicher(Bar: string) {
    switch (Bar) {
      case "none":
        return "BarDisable";
      case "GameBar":
        return "GameBar";
      case "DontShow":
        return "DontShow";
      case "Show":
        return "Show";
    }
  }

  return (
    <div>
      <LayoutMenus
        menuOpen={menuOpen}
        closeMenuHandler={closeMenuHandler}
        className="top-0 right-0"
      >
        <div className="grid grid-cols-1">
          <div className="">
            <Weather />
          </div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              sx={{ width: "90%" }}
              className="maxAccount"
              defaultValue={dayjs(new Date())}
            />
          </LocalizationProvider>
        </div>
      </LayoutMenus>
    </div>
  );
};

export default AccountData;
