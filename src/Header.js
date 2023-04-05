function Header({onButtonClick}) {
  return (
    <header className="heading">
      <div className="title">
        <div className="intro-text">
          <img src="logo.png" alt="logo-image" className="logo" />
          <h1 className="website-heading">Random Facts about anything</h1>
        </div>
        <button type="button" className="create-task btn" onClick={() =>onButtonClick((show) =>!show)}>
          Enter new facts
        </button>
      </div>
    </header>
  );
}

export default Header;
