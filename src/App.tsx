import { Route, Routes } from "react-router-dom";
import { Error404, Home, NewTripForm, TripDetails, TripsList } from "./pages";
import { AppStyled } from "@src/components/styles";
import { Header } from "@src/components";

const App = () => {
  return (
    <AppStyled>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewTripForm />} />
        <Route path="/trips" element={<TripsList />} />
        <Route path="/trips/:id" element={<TripDetails />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
