import { indent, underscore } from "../styles";

/**
 * Renders results table header.
 */
export const renderTableHeader = () => {
  const scoreHeader = indent(underscore("Score:"), 8);
  const prmHeader = indent(underscore("PRM:"), 4);
  const modifiersHeader = indent(underscore("Modifiers:"), 2);

  console.log(`${scoreHeader}${prmHeader}${modifiersHeader}`);
};
