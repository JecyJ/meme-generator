import Header from "./components/header";
import Main from "./components/main";

function App() {
  return (
    <div className="App flex justify-center mt-8">
      <div className=" border w-3/5">
        <Header />
        <Main />
      </div>      
    </div>
  );
}

export default App;
