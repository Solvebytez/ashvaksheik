import CommunityPageView, {
  communityMetadata,
} from "@/components/Community/CommunityPageView";
import { getCommunityPage } from "@/lib/communityPages";

const page = getCommunityPage("/muslim-realtor-brampton")!;

export const metadata = communityMetadata(page);

export default function MuslimRealtorBramptonPage() {
  return <CommunityPageView page={page} />;
}
