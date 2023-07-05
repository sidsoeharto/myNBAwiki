import styled from "@emotion/styled";
import { colors } from "../../styles/theme";
import { Grid } from "@material-ui/core";

export const PlayerSummaryContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: ${props => (props.team ? colors[props.team] : colors.nbaDarkBlue)};
`

export const TabContainer = styled.div`
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  padding: 4px 0;
  width: 100%;
  background-color: ${colors.white}
`