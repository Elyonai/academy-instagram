import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Feed from "./Feed/Feed";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          {/*<Header />*/}
          <Routes>
            <Route path="/" element={<Feed />} />
            {/*<Route path="/profile" element={<Profile />} />*/}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
