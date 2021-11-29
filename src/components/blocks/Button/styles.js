import styled from 'styled-components'

export const Container = styled.button`
  padding: ${({ theme }) => theme.spacing(1)}px ${({ theme }) => theme.spacing(2)}px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fonts.medium}px;
  border-radius: 4px;
  cursor: pointer;
`
