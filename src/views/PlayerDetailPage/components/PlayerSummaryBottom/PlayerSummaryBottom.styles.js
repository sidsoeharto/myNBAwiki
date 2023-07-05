import styled from "@emotion/styled";
import { colors } from "../../../../styles/theme";

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

export const Container = styled.div`
  position: relative;
  color: ${colors.white};
  background-color: rgba(0,0,0,.2);
  padding-left: 5rem;
  padding-right: 5rem;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  ${mq[0]} {
    flex-direction: column;
    padding-left: 0px;
    padding-right: 0px;
  }
`
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  ${mq[0]} {
    flex-direction: column;
    margin-left: 0px;
    margin-right: 0px;
  }
`

export const StatsSection = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 0;
  padding-bottom: 0;
  min-width: 40%;
  ${mq[0]} {
    padding-top: 32px;
    padding-bottom: 32px;
    border-bottom: 1px solid white;
  }
`

export const PlayerStat = styled.div`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const PlayerDivider = styled.div`
  display: block;
  border-left: 1px solid white;
  border-left-width: 1px;
  border-color: ${colors.white};
  opacity: 1;
  box-sizing: border-box;
  line-height: 1.5;
`

export const PlayerStatLabel = styled.div`
  font-family: Roboto,Arial,sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  ${mq[0]} {
    font-size: 0.75rem;
  }
`

export const PlayerStatValue = styled.div`
  text-transform: uppercase;
  font-family: Oswald,sans-serif;
  font-weight: 400;
  font-size: 1.625rem;
  line-height: .8;
`

export const ExtendedStatsSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const ExtendedStatsDivider = styled.div`
  border-bottom-width: 1px;
  border-color: ${colors.white};
  opacity: 1;
`

export const ExtendedStatsContainerTop = styled.div`
  display: flex;
  border-bottom: 1px solid white;
`

export const ExtendedStatsContainerBottom = styled.div`
  display: flex;
`

export const ExtendedStatsBox = styled.div`
  width: 25%;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  flex: 1 1;
  border-left: 1px solid white;
  border-right: 1px solid white;
`

export const ExtendedStatsLabel = styled.p`
  font-family: Roboto,Arial,sans-serif;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25;
  margin: 0;
  text-transform: uppercase;
  ${mq[0]} {
    font-size: 0.675rem;
  }
`

export const ExtendedStatsValue = styled.p`
  font-family: Roboto,Arial,sans-serif;
  font-weight: 400; 
  font-Size: 1rem;
  line-height: 1.25;
  margin: 0;
  ${mq[0]} {
    font-size: 0.675rem;
  }
`