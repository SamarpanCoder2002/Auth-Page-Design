import SignInEntryPoint from "./signin/app";
import SignUpEntryPoint from "./signup/app";

const Switcher = () => {
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/signup"
  )
    return <SignUpEntryPoint />;
  return <SignInEntryPoint />;
};

export default Switcher;
