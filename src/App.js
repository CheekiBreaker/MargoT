// import AppRouter from "./components/pages/AppRouter";
// import Index from "./components/pages/index/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageOne, PageTwo } from "./components/pages/Page/pages";
// import { MainPage } from "./components/pages/Main/MainPage";
import { AppRoutes } from "./components/pages/AppRouter";

const App = () => {
  return (
    /* вариант хекслета 
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<div> No page is selected</div>} />
          <Route path="one" element={<PageOne />} />
          <Route path="two" element={<PageTwo />} />
        </Route>
      </Routes>
    </BrowserRouter>*/

    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  );
};

export default App;
