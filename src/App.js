import "./App.css";
import GlobalStyles from "./GlobalStyles";
import Header from "./Componenets/Header";
import ContentBox from "./Componenets/ContentBox";

import * as S from "./styles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <S.Container>
        <Header></Header>
        <S.Title>Latest updates</S.Title>
        <S.MainContainer>
          <ContentBox />
        </S.MainContainer>
      </S.Container>
    </div>
  );
}

export default App;
