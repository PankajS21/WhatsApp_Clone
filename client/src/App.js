// import logo from './logo.svg';
import './App.css';
import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';


function App() {

  const clientId="289089626461-mlaqn20tesfau5u6mj7ngivib1u4vac4.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
        <AccountProvider>
            <Messenger/>
        </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
