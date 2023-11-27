import { Provider } from "react-redux";
import "./App.css";
import store from "./features/store";
import AppleContainer from "./components/appleContainer";
import BananaContainer from "./components/bananaContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <AppleContainer />
      <BananaContainer />
      <UserContainer/>
    </Provider>
  );
}

export default App;

// 1. npm install @reduxjs/toolkit
// 2. npm install react-redux
// 3. craete feature folder
// 4. create itemReducer file in feature folder
// 5. wrap provider on app components
// 6. pass store to provider
