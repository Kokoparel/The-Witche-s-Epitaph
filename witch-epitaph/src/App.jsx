import Header from "./components/Header";
import EpitaphDisplay from "./components/EpitaphDisplay";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="witch-bg min-h-screen flex flex-col text-stone-200">
      <Header />
      <EpitaphDisplay />
      <Footer />
    </div>
  );
};

export default App;
