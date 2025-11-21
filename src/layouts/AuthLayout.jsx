// src/layouts/AuthLayout.jsx
import Header from "../components/Header";

export default function AuthLayout({ title, children }) {
  return (
    <>
      <Header />

      <div className="layout-container">
        <div className="layout-content">
          <h2 className="text-center mb-4">{title}</h2>
          {children}
        </div>
      </div>
    </>
  );
}
