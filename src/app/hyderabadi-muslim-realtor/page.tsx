import CommunityPageView, {
  communityMetadata,
} from "@/components/Community/CommunityPageView";
import { getCommunityPage } from "@/lib/communityPages";

const page = getCommunityPage("/hyderabadi-muslim-realtor")!;

export const metadata = communityMetadata(page);

export default function Page() {
  return <CommunityPageView page={page} />;
}
