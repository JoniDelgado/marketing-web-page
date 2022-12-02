import { Route, Routes } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./components/SyleTheme";
import Agencia from "./pages/Agencia";
import Home from "./pages/Home";
import History from "./pages/History";
import LayOut from "./pages/LayOut";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<Home />} />
            <Route path="Agencia" element={<Agencia />} />
            <Route path="History" element={<History />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: auto;
  width: 100vw;
  max-width: 1200px;
  font-family: ${({ theme }) => theme.fonts.primaryFont};
  font-size: 14px;
  color: ${({ theme }) => theme.color.secondaryColor};
}

h2 {
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  color: ${({ theme }) => theme.color.secondaryColor};
  
}

button {
  padding: .8rem 1.3rem;
  background-color: ${({ theme }) => theme.color.secondaryColor};
  color: #e7e7e7;
  border: none;
  text-transform: uppercase; 
  }
`;
