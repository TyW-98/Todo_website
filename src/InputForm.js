function InputForm({CATEGORIES}) {
  return (
    <form>
      <div className="input-form">
        <input type="text" placeholder="Input your facts here" />
        <span>200</span>
        <input type="text" placeholder="Input the URL to the source" />
        <select>
          <option value="">Choose a category</option>
          {CATEGORIES.map((cat) => (
            <option value={cat.name}>{cat.name}</option>
          ))}
        </select>
        <button type="button" className="btn btn-post">Post fact</button>
      </div>
    </form>
  );
}

export default InputForm;
