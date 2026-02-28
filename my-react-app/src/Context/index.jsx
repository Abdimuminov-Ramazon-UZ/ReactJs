import { Factory } from "./Factory.jsx";
import { TeamDataList } from "./Team.jsx";
import { DataList } from "./context.jsx";
import { Dancers } from "./dancers.jsx";
import { School } from "./school.jsx";
export const Context = () => {
  return (
    <DataList>
      <Dancers>
        <Factory>
          <TeamDataList>
            <School></School>
          </TeamDataList>
        </Factory>
      </Dancers>
    </DataList>
  );
};
//we gather all context data in this file and we wrap it in all
