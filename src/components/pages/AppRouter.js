import { Route, Routes } from "react-router-dom";
import { Index } from "./index/index";
import {
  AUDACITY_ROUTE,
  CURS_ROUTE,
  DICTIONARY_ROUTE,
  INDEX_ROUTE,
  LEXICAL_ROUTE,
  LOGIN_ROUTE,
  REG_ROUTE,
  HOMEWORK_ROUTE,
  ADMIN_ROUTE,
} from "../path/const";
import { Lexical } from "./lexical/lexicalPage";
import { Curs } from "./Curs/cursPage";
import { Dictionary } from "./dictionary/dictionaryPage";
import { Audacity } from "./audacity/audacityPage";
import { Login } from "./login/loginPage";
import { Reg } from "./reg/regPage";
import { Home } from "./hw";
import { Admin } from "./adminPanel/adminPanel";

export function AppRoutes() {
  return (
    <Routes>
      <Route path={INDEX_ROUTE} element={<Index />} />
      <Route path={LEXICAL_ROUTE} element={<Lexical />} />
      <Route path={AUDACITY_ROUTE} element={<Audacity />} />
      <Route path={CURS_ROUTE} element={<Curs />} />
      <Route path={DICTIONARY_ROUTE} element={<Dictionary />} />
      <Route path={HOMEWORK_ROUTE} element={<Home />}></Route>
      <Route path={LOGIN_ROUTE} element={<Login />}></Route>
      <Route path={REG_ROUTE} element={<Reg />}></Route>
      <Route path={ADMIN_ROUTE} element={<Admin />}></Route>
    </Routes>
  );
}
