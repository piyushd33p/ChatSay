import { GoogleOAuthProvider } from "@react-oauth/google";

import Messenger from "./components/Messenger";

import AccountProvider from "./context/AccountProvider";

function App() {
  const clientId =
    "554325772436-kt5nnr8q3kh8tfnem5n9sugmd8q7vrbo.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
