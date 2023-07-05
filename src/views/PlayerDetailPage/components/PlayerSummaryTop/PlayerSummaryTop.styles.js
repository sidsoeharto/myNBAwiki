import styled from "@emotion/styled";
import { colors } from "../../../../styles/theme";

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

export const Container = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
`

export const PlayerMain = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  max-width: 1440px;
  position: relative;
  display: block;
`

export const Main = styled.div`
  display: flex;
  padding-left: 5rem;
  padding-right: 5rem;
  ${mq[0]} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

export const MainInner = styled.div`
  display: block;
  width: 33.3%;
  ${mq[2]} {
    width: 50%;
  }
`

export const MainTeamLogoContainer = styled.div`
  position: absolute;
  min-width: 0;
  margin-top: 1.25rem;
  width: 8rem;
  ${mq[0]} {
    width: 4rem;
  }
`

export const MainTeamLogoBlock = styled.div`
  position: relative;
  min-width: 100%;
`

export const MainTeamLogo = styled.img`
  display: block;
  min-width: 100%;
`

export const MainInnerContainer = styled.div`
  display: flex;
  width: 66.666667%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${mq[2]} {
    width: 50%;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start   ;
    margin-top: 4px;
  }
`

export const MainInnerBio = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.white};
`

export const MainInnerBioInfo = styled.h2`
  font-family: Roboto,Arial,sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  margin-bottom: 2px;
  ${mq[0]} {
    font-size: 0.625rem
  }
`

export const MainInnerBioInfoNameText = styled.h1`
  text-transform: uppercase;
  font-family: Oswald,sans-serif;
  font-weight: 500;
  font-size: 60px;
  line-height: 0.8;
  margin: 6px 0;
  ${mq[0]} {
    font-size: 1.5rem;
    margin: 2px 0;
  }
`

export const PlayerTeamLogo = styled.div`
  position: absolute;
  width: 50%;
  ${'' /* width: 66.666667%; */}
  opacity: .05;
  transform: translateY(-35%);
`

export const TeamLogo = styled.div`
  position: relative;
  min-width: 100%;
`

export const PlayerImage = styled.img`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  maxWidth: 100%;
  height: auto;
  marginBottom: -8px;
`

export const FavSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
`

export const FavButton = styled.button`
  padding: 0.25rem 1.5rem;
  border-radius: 9999px;
  outline: 2px solid transparent;
  outline-offset: 2px;
  font-family: Roboto,Arial,sans-serif;
  font-weight: 700;
  font-size: .75rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #fff;
  color: var(--white);
  border: 2px solid #fff;
  width: 100%;
  ${mq[0]} {
    padding: 0 0.5rem;
    align-items: left;
    justify-content: left;
  }
`