import Layout from "src/components/layout/Layout";
import UploadModal from "./components/modals/UploadModal";
import Router from "./router/Router";

function App() {
  return (
    <>
      <div className="general__container h-screen">
        <Layout>
          <Router />
        </Layout>
      </div>
    </>
  );
}

export default App;
