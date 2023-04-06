function CategoryFilter(props) {
  const CATEGORIES = props.CATEGORIES;
  const setCurrentCategory = props.setCurrentCategory;

  return (
    <aside>
      <div className="hashtag-column">
        <ul className="hashtag-selector">
          <li>
            <button
              type="button"
              className="btn btn-all btn-cat"
              onClick={() => setCurrentCategory("all")}
            >
              All
            </button>
          </li>
          {CATEGORIES.map((cat) => (
            <li key={cat.name}>
              <button
                type="button"
                className="btn btn-cat"
                style={{ backgroundColor: cat.color }}
                onClick={() => setCurrentCategory(cat.name.charAt(0).toUpperCase() + cat.name.slice(1).toLowerCase())}
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
