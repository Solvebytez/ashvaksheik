import CommunityPageView, {
  communityMetadata,
} from "@/components/Community/CommunityPageView";
import { getCommunityPage } from "@/lib/communityPages";

const page = getCommunityPage("/telugu-realtor")!;

export const metadata = communityMetadata(page);

export default function TeluguRealtorPage() {
  return <CommunityPageView page={page} />;
}
