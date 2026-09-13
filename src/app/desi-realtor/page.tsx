import CommunityPageView, {
  communityMetadata,
} from "@/components/Community/CommunityPageView";
import { getCommunityPage } from "@/lib/communityPages";

const page = getCommunityPage("/desi-realtor")!;

export const metadata = communityMetadata(page);

export default function DesiRealtorPage() {
  return <CommunityPageView page={page} />;
}
