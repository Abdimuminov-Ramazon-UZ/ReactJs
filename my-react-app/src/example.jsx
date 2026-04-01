//17-lesson
// LazyLoad
import { Profiler } from "react";
import { Antdesign } from "./antdesign";
import { Mui } from "./mui";
// import { Modal } from "./modal";
export const Example = () => {
  // we get info about loading from console what we use Profiler.we use react dev tools when we need to toher loading actions we touch start recording and actiong then touch to stop and get datas about loading datas from offline or online datas
  const onRender = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTine,
    interactions,
  ) => {
    console.log("stop tabled");
    // console.table({
    //   id,
    //   phase,
    //   actualDuration,
    //   baseDuration,
    //   startTime,
    //   commitTine,
    //   interactions,
    // });
  };
  return (
    <Profiler id="root" onRender={onRender}>
      <div style={{ display: "flex", justifyContent: "left" }}>
        <Antdesign style={{ display: "flex", flex: 2 }} />
        <Mui style={{ display: "flex", flex: 1 }} />
      </div>
    </Profiler>
  );
};
