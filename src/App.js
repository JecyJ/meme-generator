import Header from "./components/header";
import Main from "./components/main";
import Test from "./components/test"
import Contact from "./components/contactcard";
import Box from "./components/box"
import Form from "./components/form"
import FormPractise from "./components/form practise";

function App() {
  return (
    <div className="App flex justify-center bg-blue-300 w-full h-full">
      <div className="w-3/5 my-8">
        <Header />
        <Main />
        <Test />
        <Contact />
        <Box darkMode= {true} />
        <Form />
        <FormPractise />
      </div>      
    </div>
  );
}

export default App;
