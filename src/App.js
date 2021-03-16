import "semantic-ui-css/semantic.min.css";
import "./App.css";
import profile from "./profile.json";
import Theme from "./components/professional-basic.jsx";

function App() {
  return (
    <div>
      <Theme profile={profile}></Theme>
    </div>
  );
}

export default App;
