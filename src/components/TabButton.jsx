export default function TabButton({ children }) {
  function handleClick() {
    // clickHandler()
    console.log("Hello World!");
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
