import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <Content>
      <LeftColumn>
      hello
      </LeftColumn>
      <Main>
        world
      </Main>
    </Content>
    
  );
}

const Content = styled.div`
display:flex ;
padding: 24px ;
`

const LeftColumn=styled.div`
float:left;
width: 17% ;
`

const Main=styled.div`
width:83% ;
float: right;
`

export default App;
