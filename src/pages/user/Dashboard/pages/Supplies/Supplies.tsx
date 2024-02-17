import { Link } from "react-router-dom";

const Supplies = () => {
  const supplyPosts = [
    {
      id: 1,
      title: " Masks",
      category: "Personal",
      quantity: 500,
    },
    { id: 2, title: "Hand Sanitizer", category: "Sanitation", quantity: 1000 },
    { id: 3, title: "Canned Food", category: "Food", quantity: 200 },
  ];

  return (
    <div className="">
      <div className=" table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {supplyPosts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.category}</td>
                <td>{post.quantity}</td>
                <td className="d-flex gap-2">
                  <button className="btn btn-primary btn-sm">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link to="/dashboard/create-supply" className="btn btn-primary">
          Add Supply Post
        </Link>
      </div>
    </div>
  );
};

export default Supplies;
