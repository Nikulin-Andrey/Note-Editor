import styled from 'styled-components'

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.font};
  background: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fonts.small}px;
  border-radius: 4px;
  width: 30%;
  box-shadow: gray 2px 2px 5px;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
  padding: ${({ theme }) => theme.spacing(2)}px;
  min-width: 200px;
`
export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`
export const Content = styled.div`
  padding: ${({ theme }) => theme.spacing(1)}px;
`
