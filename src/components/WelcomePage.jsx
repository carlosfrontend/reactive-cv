import HeaderLogo from "./HeaderLogo";
import logo from "./logo";
import "../styles/WelcomePage.css";
import HeaderButton from "./HeaderButton";

export default function WelcomePage({
  children,
  setIsVisited,
}) {
  const handleVisited = () => {
    setIsVisited(true);
  };

  return (
    <>
      <div className="welcome-parent">
       <div className="welcome-children">
       <HeaderLogo src={logo.src} alt={logo.alt} />
        {children}
        <HeaderButton onClick={handleVisited}  title={"Start Experience"} />
       </div>
      </div>
      
    </>
  );
}
