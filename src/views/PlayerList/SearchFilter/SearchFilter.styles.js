import styled from "@emotion/styled";
import { alpha } from "@material-ui/core";
import InputBase from '@mui/material/InputBase';
import { colors } from "../../../styles/theme";

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

export const SearchFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.25rem 1rem;
  border-radius: 1rem;
  background-color: ${colors.white};
  filter: drop-shadow(0 2px 4px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
`

export const Search = styled.div`
  position: relative;
  border-radius: 10px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: ${alpha(colors.nbaNavy, 0.05)};
  &:hover: {
    backgroundColor: ${alpha(colors.nbaNavy, 0.1)},
  },
  margin-left: 1rem;
  width: 100%;
  ${mq[0]} {
    margin-left: 1rem;
    width: auto;
  }
`;

export const SearchIconWrapper = styled.div`
  padding: 0 4px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInputBase = styled(InputBase)`
  color: inherit;
  padding-left: 2rem;
  & .MuiInputBase-input: {
    padding: 1px 1px 1px 0;
    padding-left: calc(1em + 2rem);
    transition: width 2s;
    width: '100%',
    ${mq[0]}: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
`