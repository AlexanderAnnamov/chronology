import 'reset-css/reset.css';
import './index.css'
import SovietTimeline from "./components/SovietTimeline/SovietTimeline.tsx";
import {PageTitle} from "./components/PageTitle/PageTitle.tsx";

function App() {

  return (
    <>
      <PageTitle/>
      <SovietTimeline/>
    </>
  )
}

export default App
