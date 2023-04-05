function CategoryFilter({ CATEGORIES }) {
  return (
    <aside>
      <div className="hashtag-column">
        <ul className="hashtag-selector">
          <li>
            <button type="button" className="btn btn-all btn-cat">
              All
            </button>
          </li>
          {CATEGORIES.map((cat) => (
            <li key={cat.name}>
              <button
                type="button"
                className="btn btn-cat"
                style={{ backgroundColor: cat.color }}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default CategoryFilter;
