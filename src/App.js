import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons/css/boxicons.min.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Products from "./components/Products";
import Scrolltop from "./Scrolltop";
import Team from "./components/Team";
import Mobileappdevelopmentservices from "./components/Mobile-app-development-services";
import Webdevelopmentservices from "./components/Web-development-services";
import Softwaredevelopmentservices from "./components/Software-development-services";
import Digitalmarketingservices from "./components/Digital-marketing-services";
import SEOservices from "./components/SEO-services";
import Graphicsdesigningservices from "./components/Graphics-designing-services";
import Educationmanagementsystem from "./components/Education-management-system";
import Ecommercesolutions from "./components/Ecommerce-solutions";
import Enterpriseresourceplanning from "./components/Enterprise-resource-planning";
import Pointofsale from "./components/Point-of-sale";
import Portfolio from "./components/Portfolio";
import Topbar from "./components/Topbar";
import Blogcategory from "./components/Blogcategory";
import Admin from "./components/Admin";
import Blog from "./components/Blog";
import Blogcat from "./components/Blogcat";
import Signup from "./components/Signup";
import WebsitePortfolio from "./components/WebsitePortfolio";
import Allposts from "./components/Allposts";
import Addcategory from "./components/Addcategory";
import Allcategory from "./components/Allcategory";
import Board from "./components/Board";
import MyProvider from "./ContextApi/MyProvider";
import DetailFAQ from "./components/DetailFAQ";
import Livechat from "./components/Livechat";
import Industries from "./components/Industries";
import AdminLogin from "./components/AdminLogin";
import Help from "./components/Help";
import UserProfile from "./components/UserProfile";
import GeneratedTickets from "./components/GeneratedTickets";
import TicketGenerate from "./components/TicketGenerate";
import SolvedTickets from "./components/SolvedTickets";
import PendingTicket from "./components/PendingTicket";
import AllTickets from "./components/AllTickets";
import UserLogin from "./components/UserLogin";
function App() {
  return (
    <div className="App">
      <Router>
        <MyProvider>
          <Topbar />
          <Navbar />
          <Scrolltop />
          <Livechat />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/Website-portfolio" element={<WebsitePortfolio />} />
            <Route path="/faq-page" element={<DetailFAQ />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="/help" element={<Help />} />
            <Route path="/userLogin" element={<UserLogin/>} />

            <Route path="/user-profile" element={<UserProfile />} >
              <Route index element={<Navigate to="ticket-generate" />} />
              <Route path="ticket-generate" element={<TicketGenerate />} />
              <Route path="generated-tickets" element={<GeneratedTickets />} />
              <Route path="open-status-tickets" element={<SolvedTickets />} />
              <Route path="close-status-tickets" element={<PendingTicket />} />
            </Route>
            <Route
              path="/software-development-services"
              element={<Softwaredevelopmentservices />}
            />
            <Route
              path="/digital-marketing-services"
              element={<Digitalmarketingservices />}
            />
            <Route
              path="/mobile-app-development-services"
              element={<Mobileappdevelopmentservices />}
            />
            <Route
              path="/graphics-designing-services"
              element={<Graphicsdesigningservices />}
            />
            <Route path="/seo-services" element={<SEOservices />} />
            <Route path="/point-of-sale" element={<Pointofsale />} />
            <Route path="/signup" element={<Signup />} />

            <Route
              path="/education-management-system"
              element={<Educationmanagementsystem />}
            />
            <Route
              path="/erp-solutions"
              element={<Enterpriseresourceplanning />}
            />
            <Route path="/ecommerce-solutions" element={<Ecommercesolutions />} />
            <Route path="/point-of-sale" element={<Pointofsale />} />
            <Route
              path="/mobile-app-development-services"
              element={<Mobileappdevelopmentservices />}
            />
            <Route
              path="/web-development-services"
              element={<Webdevelopmentservices />}
            />
            <Route path="/our-portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postSlug" element={<Blogcat />} />
            <Route />
            <Route path="/adminPanel" element={<Admin />}>
              <Route index element={<Navigate to="addblog" />} />
              <Route path="addblog" element={<Blogcategory />} />
              <Route path="allposts" element={<Allposts />} />
              <Route path="addcategory" element={<Addcategory />} />
              <Route path="allcategory" element={<Allcategory />} />
              <Route path="board" element={<Board />} />
              <Route path="alltickets" element={<AllTickets />} />
            </Route>

            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
          </Routes>

          <Footer />
        </MyProvider>
      </Router>
    </div>
  );
}

export default App;
