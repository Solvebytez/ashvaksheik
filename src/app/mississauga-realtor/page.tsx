import CommunityPageView, {
  communityMetadata,
} from "@/components/Community/CommunityPageView";
import { getCommunityPage } from "@/lib/communityPages";

const page = getCommunityPage("/mississauga-realtor")!;

export const metadata = communityMetadata(page);

export default function MississaugaRealtorPage() {
  return <CommunityPageView page={page} />;
}
