import styled from 'styled-components'

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(1)}px;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  display: flex;
  justify-content: space-between; 
`
