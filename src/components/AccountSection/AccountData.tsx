import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";
import LayoutMenus from "../Utilities/LayoutMenus";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";

const AccountData: React.FC = () => {
  const menuOpen = useAppSelector((state) => state.menu.menuAccountOpened);

  const dispatch = useAppDispatch();
  const closeMenuHandler = () => {
    dispatch(menusActions.closeMenuAccount);
  };
  return (
    <div>
      <LayoutMenus
        menuOpen={menuOpen}
        closeMenuHandler={closeMenuHandler}
        className="top-0 right-0"
      >
        <div className="grid grid-cols-1">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              sx={{ width: "290px", marginTop:"40px" }}
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
