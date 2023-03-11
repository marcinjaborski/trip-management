import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import NewTripForm from "./components/NewTripForm";
import { AppStyled } from "./components/styles/App.styled";
import TripsList from "./components/TripsList";
import Home from "./components/Home";

const App = () => {
  return (
    <AppStyled>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewTripForm />} />
        <Route path="/trips" element={<TripsList />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
