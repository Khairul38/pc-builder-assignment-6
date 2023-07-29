import Footer from "../ui/Footer";
import Header from "../ui/Header";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="mt-[72px] min-h-[80vh]">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
