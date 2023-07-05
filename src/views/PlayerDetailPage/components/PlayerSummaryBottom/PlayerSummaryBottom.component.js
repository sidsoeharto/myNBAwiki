import React from 'react';
import moment from 'moment';

import { Container, ExtendedStatsBox, ExtendedStatsContainerBottom, ExtendedStatsContainerTop, ExtendedStatsDivider, ExtendedStatsLabel, ExtendedStatsSection, ExtendedStatsValue, InnerContainer, PlayerDivider, PlayerStat, PlayerStatLabel, PlayerStatValue, StatsSection } from './PlayerSummaryBottom.styles';

const PlayerSummaryBottom = (props) => {
  const { player, stats } = props;
  const today = moment();

  return (
    <Container>
      <InnerContainer>
        <StatsSection>
          <PlayerStat>
            <PlayerDivider />
            <PlayerStatLabel>
              PPG
            </PlayerStatLabel>
            <PlayerStatValue>
              {Number(stats.PTS).toFixed(1)}
            </PlayerStatValue>
          </PlayerStat>
          <PlayerStat>
            <PlayerDivider />
            <PlayerStatLabel>
              RPG
            </PlayerStatLabel>
            <PlayerStatValue>
              {Number(stats.REB).toFixed(1)}
            </PlayerStatValue>
          </PlayerStat>
          <PlayerStat>
            <PlayerDivider />
            <PlayerStatLabel>
              APG
            </PlayerStatLabel>
            <PlayerStatValue>
              {Number(stats.AST).toFixed(1)}
            </PlayerStatValue>
          </PlayerStat>
          <PlayerStat>
            <PlayerDivider />
            <PlayerStatLabel>
              PIE
            </PlayerStatLabel>
            <PlayerStatValue>
              {Number(stats.PIE * 100).toFixed(1)}
            </PlayerStatValue>
          </PlayerStat>
        </StatsSection>
        <ExtendedStatsSection>
          <ExtendedStatsDivider />
          <ExtendedStatsContainerTop>
            <ExtendedStatsBox>
              <ExtendedStatsLabel>
                Height
              </ExtendedStatsLabel>
              <ExtendedStatsValue>
                {player.HEIGHT}
              </ExtendedStatsValue>
            </ExtendedStatsBox>
            <ExtendedStatsBox>
              <ExtendedStatsLabel>
                Weight
              </ExtendedStatsLabel>
              <ExtendedStatsValue>
                {player.WEIGHT}
              </ExtendedStatsValue>
            </ExtendedStatsBox>
            <ExtendedStatsBox>
              <ExtendedStatsLabel>
                Country
              </ExtendedStatsLabel>
              <ExtendedStatsValue>
                {player.COUNTRY}
              </ExtendedStatsValue>
            </ExtendedStatsBox>
            <ExtendedStatsBox>
              <ExtendedStatsLabel>
                School
              </ExtendedStatsLabel>
              <ExtendedStatsValue>
                {player.SCHOOL}
              </ExtendedStatsValue>
            </ExtendedStatsBox>
          </ExtendedStatsContainerTop>
          <ExtendedStatsContainerBottom>
            <ExtendedStatsBox>
              <ExtendedStatsLabel>
                Age
              </ExtendedStatsLabel>
              <ExtendedStatsValue>
                {`${Math.floor(moment(new Date()).diff(moment(player.BIRTHDATE),'years',true))} years`}
              </ExtendedStatsValue>
            </ExtendedStatsBox>
            <ExtendedStatsBox>
              <ExtendedStatsLabel>
                Birthdate
              </ExtendedStatsLabel>
              <ExtendedStatsValue>
                {moment(player.BIRTHDATE).format('DD MMMM YYYY')}
              </ExtendedStatsValue>
            </ExtendedStatsBox>
            <ExtendedStatsBox>
              <ExtendedStatsLabel>
                Draft
              </ExtendedStatsLabel>
              <ExtendedStatsValue>
                {player.DRAFT_NUMBER === "" ? "Undrafted" : `${player.DRAFT_YEAR} R${player.DRAFT_ROUND} Pick ${player.DRAFT_NUMBER}`}
              </ExtendedStatsValue>
            </ExtendedStatsBox>
            <ExtendedStatsBox>
              <ExtendedStatsLabel>
                Experience
              </ExtendedStatsLabel>
              <ExtendedStatsValue>
                {player.SEASON_EXP} years
              </ExtendedStatsValue>
            </ExtendedStatsBox>
          </ExtendedStatsContainerBottom>
        </ExtendedStatsSection>
      </InnerContainer>
    </Container>
  );
}

export default PlayerSummaryBottom;