import {
  CookieWatermark,
  FeaturedQuoteSection,
  Footer,
  Navbar,
  QuoteList,
} from "./components";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <FeaturedQuoteSection />
      <QuoteList />
      <CookieWatermark />
      <Footer />
    </div>
  );
}
