import { Timeline } from "@/components/board/timeline";
import { getMoodEntries } from "@/server/queries";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
export async function MoodBoard() {
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["mood-entries"],
    queryFn: () => getMoodEntries({ cursor: 0 }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    pages: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Timeline />
    </HydrationBoundary>
  );
}
