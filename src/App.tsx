import MainLayout from "./components/layouts/MainLayout";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  return (
    <ScrollToTop>
      <MainLayout />
    </ScrollToTop>
  );
};

export default App;
