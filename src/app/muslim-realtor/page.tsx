import CommunityPageView, {
  communityMetadata,
} from "@/components/Community/CommunityPageView";
import { getCommunityPage } from "@/lib/communityPages";

const page = getCommunityPage("/muslim-realtor")!;

export const metadata = communityMetadata(page);

export default function MuslimRealtorPage() {
  return <CommunityPageView page={page} />;
}
