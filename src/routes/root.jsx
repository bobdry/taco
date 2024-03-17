import {
  Outlet,
  useNavigation,
  useParams,
} from "react-router-dom";
import Header from "./../components/header";
import Footer from "./../components/footer";

export default function Root() {
  const navigation = useNavigation();
  const params = useParams();
    return (
      <>
      <Header params={params}/>
      <div id="stacks" className={navigation.state === "loading" ? "loading" : ""}>
        <Outlet />
      </div>
      <Footer />
      </>
    );
  }