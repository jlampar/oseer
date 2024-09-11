import { ConstraintsType } from "./ConstraintsType.type";
import { Method } from "./Method.type";
import { Mode } from "./Mode.type";
import { Source } from "./Source.type";

export type Argv = {
  [x: string]: unknown;
  mode?: Mode;
  method?: Method;
  source?: Source;
  "constraints-type"?: ConstraintsType;
  pick?: boolean;
  _: Array<string | number>;
  $0: string;
};
