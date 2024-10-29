import {
  Outlet,
  useNavigate,
  useNavigation,
  useParams,
} from "react-router-dom";
import { ClerkProvider } from '@clerk/clerk-react'
import Header from "./../components/header";
import Footer from "./../components/footer";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

export default function Root() {
  const navigation = useNavigation();
  const navigate = useNavigate()
  const params = useParams();
    return (
      <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
      >
        <Header params={params}/>
        <div id="stacks" className={navigation.state === "loading" ? "loading" : ""}>
          <Outlet />
        </div>
        <Footer />
      </ClerkProvider>
    );
  }