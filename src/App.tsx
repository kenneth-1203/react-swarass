import Footer from "./components/footer";
import Navbar from "./components/navbar";
import AppContextProvider from "./components/providers/app-context-provider";
import Activities from "./sections/activities";
import Contact from "./sections/contact";
import Gallery from "./sections/gallery";
import Home from "./sections/home";
import Services from "./sections/services";

function App() {
  return (
    <AppContextProvider>
      <main className="relative">
        <Navbar />
        <Home />
        <Services />
        <Gallery />
        <Activities />
        <Contact />
        <Footer />
      </main>
    </AppContextProvider>
  );
}

export default App;
