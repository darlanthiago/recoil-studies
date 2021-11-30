import { Suspense } from "react";
import { RecoilRoot } from "recoil";

import Home from "./Home";

function App() {

  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading ...</div>}>
        <Home />
      </Suspense>
    </RecoilRoot>
  )
}

export default App
