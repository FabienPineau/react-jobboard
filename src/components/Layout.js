import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, title }) => {
  return (
    <div className="min-h-full">
      <Navbar />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg leading-6 font-semibold text-gray-900">
            {title}
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-4 sm:px-0">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
