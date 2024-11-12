import './App.css';
import Card from './components/Card';
import Input from './components/Input';
import Alert from './components/Alert';
import Rating from './components/Rating';


const App = () => {

  return (
    <div className="container">
      <Input
        type="text"
        label="First Name"
        placeholder="Enter your first name"
      />
      <Input
        type="text"
        label="Last Name"
        placeholder="Enter your last name"
      />
      <Input
        type="email"
        label="Email"
        placeholder="Enter your email address"
      />
      <Input
        type="password"
        label="Password"
        placeholder="Enter your secure password"
      />

      {/* Component 2 */}
      <div className="card-container">
        <Card
          imageUrl="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Basic Tee"
          price="35"
        />
        <Card
          imageUrl="https://plus.unsplash.com/premium_photo-1718913931807-4da5b5dd27fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Basic White Tee"
          price="35"
        />
        <Card
          imageUrl="https://images.unsplash.com/photo-1485218126466-34e6392ec754?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Basic Charcoal Tee"
          price="35"
        />
        <Card
          imageUrl="https://images.unsplash.com/photo-1592492135673-55966d3b541a?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Artwork Dots Tee"
          price="45"
        />
      </div>

      {/* Component 3 */}
      <div className="container">
        <Alert title="Successfully uploaded" type="success" />
        <Alert title="Attention needed" type="warning" message="Lorem ipsum ..." />
      </div>

      {/* Component 4 */}
      <div className="container">
        <Rating value={4} />
        <Rating value={4} maximumValue={10} />
      </div>
    </div>
  );
}

export default App;
