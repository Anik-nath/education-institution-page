import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Main from "./Components/Main/Main";
import Instructors from "./Components/Instructors/Instructors";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";
import PopularCourse from "./Components/PopularCourse/PopularCourse";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Main></Main>
            <PopularCourse></PopularCourse>
          </Route>
          <Route exact path="/">
            <Main></Main>
            <PopularCourse></PopularCourse>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/courses">
            <Services></Services>
          </Route>
          <Route path="/instructors">
            <Instructors></Instructors>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
