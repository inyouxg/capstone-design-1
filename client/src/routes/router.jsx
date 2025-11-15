import { createBrowserRouter } from "react-router-dom";
import { IntroPage } from "../pages/IntroPage";
import { MainPage } from "../pages/MainPage";
import { ProfileSettingPage } from "../pages/ProfileSettingPage";
import { EntryRoute } from "./EntryRoute";
import { DietReportPage } from "../pages/DietReportPage";
import { ProfileSettingModal } from "../modals/ProfileSettingModal";

const NotFound = () => (
  <main className="p-10">
    <h1>페이지를 찾을 수 없어요. (404)</h1>
    <p>주소를 다시 확인하거나 홈으로 이동해 주세요.</p>
    <a href="/">홈으로</a>
  </main>
);

const router = createBrowserRouter([
  { path: "/", element: <EntryRoute /> },
  { path: "/intro", element: <IntroPage /> },
  { path: "/profile", element: <ProfileSettingPage /> },
  { path: "/main", element: <MainPage /> },
  { path: `/report/:mealId`, element: <DietReportPage /> },
  { path: "*", element: <NotFound /> },
]);

export default router;