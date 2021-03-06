import "semantic-ui-css/semantic.min.css";
import "./App.css";
import profile from "./profile.json";
import Theme from "./components/Theme/theme-1/theme";
// if theme is undefined use default theme1
// const theme = profile.theme || "theme1";

// let Theme = themes[theme];

function App() {
  return (
    <div>
      <Theme profile={profile}></Theme>
    </div>
  );
}

export default App;
