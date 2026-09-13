import CommunityPageView, {
  communityMetadata,
} from "@/components/Community/CommunityPageView";
import { getCommunityPage } from "@/lib/communityPages";

const page = getCommunityPage("/oakville-realtor")!;

export const metadata = communityMetadata(page);

export default function OakvilleRealtorPage() {
  return <CommunityPageView page={page} />;
}
