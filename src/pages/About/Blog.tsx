const blogData = [
  {
    id: 1,
    title: 'Exploring the Wilderness',
    author: 'John Doe',
    image: 'https://via.placeholder.com/300',
    date: 'July 1, 2024',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    id: 2,
    title: 'Cooking Adventures',
    author: 'Jane Smith',
    image: 'https://via.placeholder.com/300',
    date: 'June 28, 2024',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    id: 3,
    title: 'Tech Trends in 2024',
    author: 'Alex Johnson',
    image: 'https://via.placeholder.com/300',
    date: 'June 25, 2024',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    id: 4,
    title: 'Fitness Goals Achieved',
    author: 'Emily Brown',
    image: 'https://via.placeholder.com/300',
    date: 'June 22, 2024',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
];

const Blog = () => {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Latest Blogs</h1>
      <div className="row">
        {blogData.map((blog, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <img src={blog.image} className="card-img-top" alt={blog.title} />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.content}</p>
                <a href="#" className="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
