import CommunityPageView, {
  communityMetadata,
} from "@/components/Community/CommunityPageView";
import { getCommunityPage } from "@/lib/communityPages";

const page = getCommunityPage("/brampton-realtor")!;

export const metadata = communityMetadata(page);

export default function BramptonRealtorPage() {
  return <CommunityPageView page={page} />;
}
