import CommunityPageView, {
  communityMetadata,
} from "@/components/Community/CommunityPageView";
import { getCommunityPage } from "@/lib/communityPages";

const page = getCommunityPage("/caledon-realtor")!;

export const metadata = communityMetadata(page);

export default function CaledonRealtorPage() {
  return <CommunityPageView page={page} />;
}
