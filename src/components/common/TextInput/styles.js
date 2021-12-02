import styled from 'styled-components'

export const Input = styled.textarea`
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.font};
  background: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fonts.small}px;
  min-width: 80%;
  height: 100px;
  border-radius: 4px;
`
