import Header from "./components/header";
import Main from "./components/main";

function App() {
  return (
    <div className="App flex justify-center bg-blue-300 w-full h-screen">
      <div className="w-3/5 mt-8">
        <Header />
        <Main />
      </div>      
    </div>
  );
}

export default App;
