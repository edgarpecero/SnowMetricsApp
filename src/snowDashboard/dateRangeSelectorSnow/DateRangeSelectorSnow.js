import React from "react";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  subWeeks,
  format,
  startOfWeek,
  endOfWeek,
  isSameWeek,
} from "date-fns";
import config from "../../config/config";
import ShowTktOpt from "./ShowTktOpt";
import { useSnowDashboard } from "../../Hooks/useSnowDashboard";


const DateRangeSelectorSnow = () => {
  const { currentWeek, handlePrevWeek, handleNextWeek } = useSnowDashboard();

  const isCurrentWeek = isSameWeek(currentWeek, new Date());
  const isPrevPrevWeek = isSameWeek(
    currentWeek,
    subWeeks(
      new Date(),
      `${config[process.env.REACT_APP_ENV].noOfPreviousWeek}`
    )
  );

  return (
    <>
      <div
        style={{
          color: "black",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1 }}>
          <ShowTktOpt />
        </div>
        <IconButton
          onClick={handlePrevWeek}
          disabled={isPrevPrevWeek}
          style={{ color: isPrevPrevWeek ? "gray" : "#FF6600" }}
          aria-label="Previous week"
          title="Previous week"
        >
          <ChevronLeftIcon />
        </IconButton>
        <span>{`${format(startOfWeek(currentWeek), "MM/dd/yyyy")} - ${format(
          endOfWeek(currentWeek),
          "MM/dd/yyyy"
        )} `}</span>
        <IconButton
          onClick={handleNextWeek}
          disabled={isCurrentWeek}
          style={{ color: isCurrentWeek ? "gray" : "#FF6600" }}
          aria-label="Next week"
          title="Next week"
        >
          <ChevronRightIcon />
        </IconButton>
      </div>
    </>
  );
};

export default React.memo(DateRangeSelectorSnow);
