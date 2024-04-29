import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <main className="Missing">
      <h1>Missing</h1>
      <p>
        <Link to='/'>Go to home page.</Link>
      </p>
    </main>
  );
};

export default Missing;
