import { Route, Routes } from "react-router-dom";
import { Error404, Home, Login, NewTripForm, TripDetails, TripsList } from "./pages";
import { AppStyled } from "@src/components/styles";
import { FeedbackSnackbar, Header } from "@src/components";
import { defaultFeedback, FeedbackContext } from "./FeedbackContext";
import { useState } from "react";

const App = () => {
  const [feedback, setFeedback] = useState(defaultFeedback);

  return (
    <FeedbackContext.Provider value={{ feedback, setFeedback }}>
      <AppStyled>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<NewTripForm />} />
          <Route path="/trips" element={<TripsList />} />
          <Route path="/trips/:id" element={<TripDetails />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <FeedbackSnackbar />
      </AppStyled>
    </FeedbackContext.Provider>
  );
};

export default App;
