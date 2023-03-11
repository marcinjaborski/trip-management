import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import NewTripForm from "./components/NewTripForm";
import { AppStyled } from "./components/styles/App.styled";

const App = () => {
  return (
    <AppStyled>
      <Header />
      <Routes>
        <Route path="/new" element={<NewTripForm />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
