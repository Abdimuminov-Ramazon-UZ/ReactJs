//17-lesson
// LazyLoad
import { Profiler } from "react";
import { Load } from "./load";
// import { Modal } from "./modal";
export const Example = () => {
  // we get info about loading from console what we use Profiler.we use react dev tools when we need to toher loading actions we touch start recording and actiong then touch to stop and get datas about loading datas from offline or online datas
  const onRender = (
    id,
    phase,
    actualDuration,
    basDuration,
    startTime,
    commitTine,
    interactions,
  ) => {
    console.table({
      id,
      phase,
      actualDuration,
      basDuration,
      startTime,
      commitTine,
      interactions,
    });
  };
  return (
    <Profiler id="root" onRender={onRender}>
      <div>
        <h1>Read and Study</h1>
        <Load />
        {/* <Modal></Modal> */}
      </div>
    </Profiler>
  );
};
