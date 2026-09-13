import CommunityPageView, {
  communityMetadata,
} from "@/components/Community/CommunityPageView";
import { getCommunityPage } from "@/lib/communityPages";

const page = getCommunityPage("/toronto-realtor")!;

export const metadata = communityMetadata(page);

export default function TorontoRealtorPage() {
  return <CommunityPageView page={page} />;
}
