import { MapFilterItems } from "./components/MapFilterItems";
import { ListingCard } from "./components/ListingCard";
import prisma from "./lib/db";
import { Suspense } from "react";
import { SkeltonCard } from "./components/SkeletonCard";
import { NoItems } from "./components/NoItems";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function getData({searchParams, userId}:{userId: string | undefined, searchParams?: {
  filter? : string
}}){

const data = await prisma.home.findMany({
  where: {
    addedCategory: true,
    addedLoaction: true,
    addedDescription: true,
    categoryName: searchParams?.filter ?? undefined,
  },
  select: {
    photo: true,
    id: true,
    price: true,
    description: true,
    country: true,
    Favorite: {
      where: {
        userId: userId ?? undefined,
      }
    }
  },
});
return data
}


export default async function Home({
  searchParams,
}: {
  searchParams?: {
    filter?: string}}) {

  return (
    <div className="container mx-auto px-5 lg:px-10">
      <MapFilterItems/>

     <Suspense key={searchParams?.filter} fallback={<SkeletonLoading/>}>
     <ShowItems searchParams={searchParams} />
     </Suspense>
    </div>
  );
}


async function ShowItems({
  searchParams,
}: {
  searchParams?: {
    filter?: string;
    country?: string;
    guest?: string;
    room?: string;
    bathroom?: string;
  };
}) {
 
  const {getUser} = getKindeServerSession();
  const user = await getUser();
  const data = await getData({ searchParams: searchParams, userId: user?.id });

  return (
   <>
    {data.length === 0 ? (
      <NoItems
        description="Please check a other category or create your own listing!"
        title="Sorry no listings found for this category..."
      />
    ) : (
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {data.map((item) => (
          <ListingCard
            key={item.id}
            description={item.description as string}
            imagePath={item.photo as string}
            location={item.country as string}
            price={item.price as number}
            homeId={item.id}
            pathName="/"
          />
        ))}
      </div>
    )}
    </>
  );
}

function SkeletonLoading() {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
      <SkeltonCard />
    </div>
  );
}