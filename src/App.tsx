import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Landing from "./Pages/Landing Page/landing";
import Blog from "./Pages/Blog Page/blog";
import Works from "./Pages/Works Page/works";
import Contact from "./Pages/Contact Page/contact";
import Container from "./utils/Container/container";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Container>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={Landing} />
          <Route path='/blog' component={Blog} />
          <Route path='/works' component={Works} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Container>
    </AnimatePresence>
  );
}

export default App;
