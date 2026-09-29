import HomePage from "@/components/Home/HomePage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Ashvak Sheik | Re/Max Millennium Real Estate",
  description:
    "Ashvak Sheik is a Telugu-speaking Hyderabadi Muslim realtor in the GTA with Re/Max Millennium Real Estate. Serving buyers and sellers across Peel, Durham, Halton, and York.",
  keywords: [
    "Telugu realtor",
    "Hyderabadi realtor",
    "Muslim realtor GTA",
    "Ashvak Sheik realtor",
  ],
  path: "/",
});

export default function Home() {
  return <HomePage />;
}
