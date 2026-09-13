import CommunityPageView, {
  communityMetadata,
} from "@/components/Community/CommunityPageView";
import { getCommunityPage } from "@/lib/communityPages";

const page = getCommunityPage("/vaughan-realtor")!;

export const metadata = communityMetadata(page);

export default function VaughanRealtorPage() {
  return <CommunityPageView page={page} />;
}
