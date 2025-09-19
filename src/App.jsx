import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countries/countries";
//Global component
const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<p>Nadir vai is getting ready..</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
