import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Container from "./components/Container";
import CardSidebar from "./components/CardSidebar";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Sidebar>
          <CardSidebar />
        </Sidebar>
        <Main />
      </Container>
    </>
  );
}

export default App;
