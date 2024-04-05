import Image from "next/image";
import Header from "./components/header";
import Banner from "./components/Banner";
import FeaturedProductListing from "./components/FeaturedProduct";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedProductListing />
    </div>
  );
}
