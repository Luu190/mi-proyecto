// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ⬇ Importación correcta según tu estructura
import HomeHooks from "./playground/HomeHooks.jsx";
import UseStateDemo from "./playground/UseStateDemo.jsx";
import UseEffectDemo from "./playground/UseEffectDemo.jsx";
import UseRefDemo from "./playground/UseRefDemo.jsx";
import UseMemoDemo from "./playground/UseMemoDemo.jsx";
import UseNavigateDemo from "./playground/UseNavigateDemo.jsx";
import UseCallbackDemo from "./playground/UseCallbackDemo.jsx";
import UseContextDemo from "./playground/UseContextDemo.jsx";
import UseReducerDemo from "./playground/UseReducerDemo.jsx"; 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Página principal de hooks */}
        <Route path="/homehooks" element={<HomeHooks />} />

        {/* Demos */}
        <Route path="/hooks/usestate" element={<UseStateDemo />} />
        <Route path="/hooks/useeffect" element={<UseEffectDemo />} />
        <Route path="/hooks/useref" element={<UseRefDemo />} />
        <Route path="/hooks/usememo" element={<UseMemoDemo />} />
        <Route path="/hooks/usenavigate" element={<UseNavigateDemo />} />
        <Route path="/hooks/usecallback" element={<UseCallbackDemo />} />
        <Route path="/hooks/usecontext" element={<UseContextDemo />} />
        <Route path="/hooks/usereducer" element={<UseReducerDemo />} />
      </Routes>
    </BrowserRouter>
  );
}
