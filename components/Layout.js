import 'tailwindcss/tailwind.css'
import Footer from './Footer';
import Meta from './Meta';
import Navbar from "./Navbar"
import SessionWrapper from './sessionWrapper';



function Layout({ children }) {


  return (
    <>
      <Meta />
      <SessionWrapper>
        <div className="content w-full h-screen ">
          <Navbar />
          {children}
          <Footer />
        </div>
      </SessionWrapper>
    </>
  );
}

export default Layout