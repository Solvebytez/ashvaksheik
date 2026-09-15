import CommunityPageView, {
  communityMetadata,
} from "@/components/Community/CommunityPageView";
import { getCommunityPage } from "@/lib/communityPages";

const page = getCommunityPage("/richmond-hill-realtor")!;

export const metadata = communityMetadata(page);

export default function RichmondHillRealtorPage() {
  return <CommunityPageView page={page} />;
}
