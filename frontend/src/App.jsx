import Layout from "src/components/layout/Layout";
import Home from "src/pages/home/Home";

function App() {
  return (
    <div className="general__container h-screen bg-gray-200">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
