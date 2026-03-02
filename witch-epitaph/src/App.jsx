import Header from "./components/Header";
import EpitaphDisplay from "./components/EpitaphDisplay";
import Footer from "./components/Footer";
import AudioPlayer from "./components/AudioPlayer";

const App = () => {
  return (
    <div className="witch-bg min-h-screen flex flex-col text-stone-200">
      <Header />
      <EpitaphDisplay />
      <Footer />
      <AudioPlayer />
    </div>
  );
};

export default App;
