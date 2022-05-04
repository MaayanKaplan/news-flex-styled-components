import "./App.css";
import GlobalStyles from "./GlobalStyles";
import Header from "./Componenets/Header";
import ContentBox from "./Componenets/ContentBox";

import * as T from "./utils";
import * as S from "./styles";

import laptopImage from "./Images/laptop.png";
import codeImage from "./Images/code.png";
import careesImage from "./Images/careers.png";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <S.Container>
        <Header></Header>
        <S.Title>Latest updates</S.Title>
        <S.MainContainer>
          <S.LeftContainer>
            <ContentBox
              secondaryTitle={T.DesignBox.secondaryTitle}
              primaryTitle={T.DesignBox.primaryTitle}
              description={T.DesignBox.description}
              margin
              button="Read this"
            ></ContentBox>

            <S.Devider />
            <S.ImageWrapper>
              <img src={laptopImage} alt="laptop-img" />
            </S.ImageWrapper>
            <ContentBox
              secondaryTitle={T.FrontendBox.secondaryTitle}
              primaryTitle={T.FrontendBox.primaryTitle}
              description={T.FrontendBox.description}
            ></ContentBox>
          </S.LeftContainer>

          <S.MiddleContainer>
            <S.ImageWrapper>
              <img src={codeImage} alt="code-img" />
            </S.ImageWrapper>
            <ContentBox
              secondaryTitle={T.ColorsBox.secondaryTitle}
              primaryTitle={T.ColorsBox.primaryTitle}
              description={T.ColorsBox.description}
            ></ContentBox>
            <S.Devider />
            <ContentBox
              secondaryTitle={T.SubscriptionBox.secondaryTitle}
              primaryTitle={T.SubscriptionBox.primaryTitle}
              description={T.SubscriptionBox.description}
              margin
              button="subscribe"
            ></ContentBox>
          </S.MiddleContainer>

          <S.RightConatiner>
            <ContentBox
              secondaryTitle={T.DevBox.secondaryTitle}
              primaryTitle={T.DevBox.primaryTitle}
              description={T.DevBox.description}
            ></ContentBox>
            <S.Devider />
            <S.ImageWrapper>
              <img src={careesImage} alt="careers-img" />
            </S.ImageWrapper>
            <ContentBox
              secondaryTitle={T.CareersBox.secondaryTitle}
              primaryTitle={T.CareersBox.primaryTitle}
              description={T.CareersBox.description}
            ></ContentBox>
          </S.RightConatiner>
        </S.MainContainer>
      </S.Container>
    </div>
  );
}

export default App;
