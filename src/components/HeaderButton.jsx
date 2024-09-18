import "../styles/HeaderButton.css";
export default function HeaderButton({ title, onClick }) {
  return <button className="header-button" onClick={onClick}>{title}</button>;
}
