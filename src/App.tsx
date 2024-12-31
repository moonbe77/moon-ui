import { useState } from "react";
import { Button, TopNavbar } from "moon-ui";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    dropdownItems: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "App Development", href: "/services/app-development" },
      { label: "App Development", href: "/services/app-development" },
      { label: "App Development", href: "/services/app-development" },
      { label: "App Development", href: "/services/app-development" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopNavbar logo={<h1>Moon-UI</h1>} menuItems={menuItems} />
      <div className="card">
        <Button
          onClick={() => setCount((count) => count + 1)}
          // variant="secondary"
        >
          {count === 0 ? "Click me " : `You clicked me ${count} times`}
        </Button>
        <Button
          onClick={() => setCount((count) => count + 1)}
          variant="secondary"
        >
          {count === 0 ? "Click me " : `You clicked me ${count} times`}
        </Button>
        <p>
          Moon-UI components are working!{" "}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </p>
      </div>
    </>
  );
}

export default App;
