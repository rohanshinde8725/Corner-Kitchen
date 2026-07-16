import AppRoutes from "./Routes/Index";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <ScrollToTop />
      <AppRoutes />
    </div>
  )
};

export default App; 