import styled from '@emotion/styled';
import { alpha } from '@material-ui/core';
import { colors } from '../../styles/theme';
import { css } from '@emotion/react';

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

export const PaginationContainer = styled.div`
  justify-content: center;
  padding: 0px;
  ${mq[0]} {
    padding: 25px; 
    margin-top: 8px;
    margin-bottom: 8px;
  },
`

export const SearchBar = styled.div`
  position: 'relative';
  border-radius: 15px;
  background-color: ${alpha(colors.white, 0.15)};
  &:hover: {
    background-color: ${alpha(colors.white, 0.25)},
  },
  margin-right: 2px;
  margin-left: 0;
  width: '100%';
`

export const SearchIconBox = styled.div`
  padding: 0 2px;
  height: '100%';
  position: 'absolute';
  pointerEvents: 'none';
  display: 'flex';
  alignItems: 'center';
  justifyContent: 'center';
`

export const InputRoot = css`
  color: 'inherit';
`

export const InputInput = css`
  padding: 1px 1px 1px 0;
  padding-left: calc(1em + 4px);
  ${'' /* transition: theme.transitions.create('width'); */}
  width: '100%',
  ${'' /* [theme.breakpoints.up('md')]: {
    width: '20ch',
  }, */}
`