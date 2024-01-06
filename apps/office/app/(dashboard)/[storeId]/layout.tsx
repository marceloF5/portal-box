import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import Navbar from "@/components/navbar";
import prismadb from "@/lib/prismadb";
// import { Card } from "@repo/ui";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      <h1 className="text-green-500">TESTE</h1>
      {/* <Card variant={"default"}>TESTE</Card> */}
      {children}
    </>
  );
}
