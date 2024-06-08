//Shadcn UI
import { Skeleton } from "@/components/ui/skeleton";

//Next dynamic - allowing for code splitting and loading components only when they are needed
import dynamic from "next/dynamic";

//LazyMap dynamically imported given component, and this component will be rendered only on client-sie.
export function HomeMap({ locationValue }: { locationValue: string }) {
  const LazyMap = dynamic(() => import("@/app/components/Map"), {
    ssr: false,
    loading: () => <Skeleton className="h-[50vh] w-full" />,
  });

  //Once the map is loaded LazyMap get locationValue prop to display the proper location
  return <LazyMap locationValue={locationValue} />;
}