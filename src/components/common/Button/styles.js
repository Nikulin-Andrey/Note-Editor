import styled from 'styled-components'

export const Container = styled.button`
  padding: ${({ theme }) => theme.spacing(1)}px ${({ theme }) => theme.spacing(2)}px;
  border: 2px solid ${({ theme, color }) => theme.colors[color]};
  color: ${({ theme, color }) => theme.colors[color]};
  background: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fonts.small}px;
  border-radius: 4px;
  cursor: pointer;
`
