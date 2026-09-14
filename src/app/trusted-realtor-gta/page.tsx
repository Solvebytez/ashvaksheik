import CommunityPageView, {
  communityMetadata,
} from "@/components/Community/CommunityPageView";
import { getCommunityPage } from "@/lib/communityPages";

const page = getCommunityPage("/trusted-realtor-gta")!;

export const metadata = communityMetadata(page);

export default function Page() {
  return <CommunityPageView page={page} />;
}
