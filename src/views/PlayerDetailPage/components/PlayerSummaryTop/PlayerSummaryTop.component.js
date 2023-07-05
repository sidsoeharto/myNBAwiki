import React from 'react';
import {
  Container,
  PlayerTeamLogo,
  TeamLogo,
  PlayerMain,
  Main,
  MainInner,
  MainTeamLogoContainer,
  MainTeamLogoBlock,
  MainTeamLogo,
  MainInnerBio,
  MainInnerBioInfo,
  MainInnerBioInfoNameText,
  MainInnerContainer,
  FavButton,
  FavSection
} from './PlayerSummaryTop.styles';

const PlayerSummaryTop = (props) => {
  const { player } = props;

  return (
    <Container>
      <PlayerTeamLogo>
        <TeamLogo>
          <img 
            src={`https://cdn.nba.com/logos/nba/${player.TEAM_ID}/global/L/logo.svg`}
            title="Orlando Magic Logo"
            alt="Orlando Magic Logo" 
            style={{
              display: 'block',
              minWidth: '100%',
              maxWidth: '100%',
              height: 'auto'
            }}
            loading="lazy"
          />
        </TeamLogo>
      </PlayerTeamLogo>
      <PlayerMain>
        <Main>
          <MainInner>
            <MainTeamLogoContainer>
              <a href="/team/1610612761/raptors/" data-is-external="false" data-has-more="false" data-has-children="true">
                <MainTeamLogoBlock href={`/teams/${player.TEAM_ID}/${player.TEAM_CODE}/`} className="Anchor_anchor__cSc3P" data-is-external="false" data-has-more="false" data-has-children="true">
                  <MainTeamLogo 
                    src={`https://cdn.nba.com/logos/nba/${player.TEAM_ID}/global/D/logo.svg`}
                    title="Toronto Raptors Logo" 
                    alt="Toronto Raptors Logo" 
                    loading="lazy" 
                  />
                </MainTeamLogoBlock>
              </a>
            </MainTeamLogoContainer>
            <img 
              src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.PERSON_ID}.png`} 
              title="Orlando Magic Logo"
              alt="Orlando Magic Logo" 
              style={{
                width: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '4rem',
                maxWidth: '100%',
                height: 'auto',
                marginBottom: '-8px'
              }}
              loading="lazy"
            />
          </MainInner>
          <MainInnerContainer>
            <MainInnerBio>
              <MainInnerBioInfo>
                {`${player.TEAM_CITY} ${player.TEAM_NAME}`} | #{player.JERSEY} | {player.POSITION}
              </MainInnerBioInfo>
              <MainInnerBioInfoNameText>
                {player.FIRST_NAME}
              </MainInnerBioInfoNameText>
              <MainInnerBioInfoNameText>
                {player.LAST_NAME}
              </MainInnerBioInfoNameText>
            </MainInnerBio>
            <FavSection>
              <FavButton>
                Follow
              </FavButton>
            </FavSection>
          </MainInnerContainer>
        </Main>
      </PlayerMain>
    </Container>
  )
}

export default PlayerSummaryTop;