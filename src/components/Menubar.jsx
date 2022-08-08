export default function Menubar({ name, setName }) {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <span>Menubar</span>
      {name ? (
        <button
          onClick={() => {
            setName({ name });
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setName("Mason");
          }}
        >
          Login
        </button>
      )}
    </nav>
  );
}
