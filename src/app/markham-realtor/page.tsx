import CommunityPageView, {
  communityMetadata,
} from "@/components/Community/CommunityPageView";
import { getCommunityPage } from "@/lib/communityPages";

const page = getCommunityPage("/markham-realtor")!;

export const metadata = communityMetadata(page);

export default function MarkhamRealtorPage() {
  return <CommunityPageView page={page} />;
}
