import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";
import { GameHooks } from "./HookState";

import { ReactComponent as GameBar } from "../../assets/gameboy.svg";
import { ReactComponent as TicTac } from "../../assets/tic-tac-toe.svg";
import { ReactComponent as Game2048 } from "../../assets/2048.svg";
import Weather from "../../Weather/WeatherApp";
import { ElseIf, If } from "../Service/condition";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function MobileAccountData({
  BackState,
  BackSet,
}: {
  BackState: boolean;
  BackSet: any;
}) {
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
      <ElseIf condition={GameHooks.GameState.parentDiv == "DontShow"}>
        <div>
          <div className="justifyedGrid">
            <Weather />
            <div className="parent">
              <div className="child">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar
                    sx={{ width: "90%" }}
                    className="maxAccount"
                    defaultValue={dayjs(new Date())}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>
        </div>
      </ElseIf>
    </div>
  );
}
