import CommunityPageView, {
  communityMetadata,
} from "@/components/Community/CommunityPageView";
import { getCommunityPage } from "@/lib/communityPages";

const page = getCommunityPage("/milton-realtor")!;

export const metadata = communityMetadata(page);

export default function MiltonRealtorPage() {
  return <CommunityPageView page={page} />;
}
