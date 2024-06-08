//For get user's data
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

//Prisma database
import prisma from "@/app/lib/db";

//For redirect to a URL
import { NextResponse } from "next/server";

//For no cache
import { unstable_noStore as noStore } from "next/cache";

export async function GET() {
  //Particular component should not be cached
  noStore();

  //For getting signed in User's data
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  //Check if is there someone singed in
  if (!user || user === null || !user.id) {
    throw new Error("Something went wrong, I am sorry....");
  }

  //Find a user with a specific user id
  let dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  //If there is someone, who hasn't got id (so not registerd), then create a new User with specific datas into the database
  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        email: user.email ?? "",
        firstName: user.given_name ?? "",
        lastName: user.family_name ?? "",
        id: user.id,
        profileImage:
          user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
      },
    });
  }

//Then redirect to the home page
  return NextResponse.redirect("https://airbnb-clone-next-alpha.vercel.app");
}