import "../styles/HeaderLogo.css";

export default function HeaderLogo({ src, alt }) {
  return <img className="headerLogo" src={src} alt={alt} />;
}
