
function Category() {
   

  return (

    <div style={{ maxWidth: 480, margin: "0 auto", padding: 24 }}>
      <h1>Category Page</h1>
      <form  >
        <div style={{ marginBottom: 16 }}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="e.g. Electronics"
            style={{ width: "100%", padding: 8 }}
            required
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label>Description</label>
          <textarea
            name="description"

            placeholder="Short description of this category"
            style={{ width: "100%", padding: 8, minHeight: 80 }}
          />
        </div>

        {/* <div style={{ marginBottom: 16 }}>
          <label>Slug</label>
          <input
            type="text"
            name="slug"
          
            placeholder="e.g. electronics"
            style={{ width: "100%", padding: 8 }}
            required
          />
        </div> */}

        <button type="submit">Save category</button>
      </form>
    </div>
  );
}

export default Category;