import CommunityPageView, {
  communityMetadata,
} from "@/components/Community/CommunityPageView";
import { getCommunityPage } from "@/lib/communityPages";

const page = getCommunityPage("/hyderabadi-realtor")!;

export const metadata = communityMetadata(page);

export default function HyderabadiRealtorPage() {
  return <CommunityPageView page={page} />;
}
