import Header from "./components/header";
import Main from "./components/main";
import Test from "./components/test"
import Contact from "./components/contactcard";

function App() {
  return (
    <div className="App flex justify-center bg-blue-300 w-full h-full">
      <div className="w-3/5 my-8">
        <Header />
        <Main />
        <Test />
        <Contact />
      </div>      
    </div>
  );
}

export default App;
