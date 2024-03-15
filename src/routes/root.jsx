import {
  Outlet,
  useNavigation,
} from "react-router-dom";
import Header from "./../components/header";
import Footer from "./../components/footer";

export default function Root() {
  const navigation = useNavigation();
    return (
      <>
      <Header />
      <div id="stacks" className={navigation.state === "loading" ? "loading" : ""}>
        <Outlet />
      </div>
      <Footer />
      </>
    );
  }