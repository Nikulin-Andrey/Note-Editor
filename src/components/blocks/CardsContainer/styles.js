import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  display: flex;
  justify-content: space-around; 
  flex-wrap: wrap;
`
