"use client";

import HarryPotterLayout from "@/app/_components/harry-potter/HarryPotterLayout";
import { useParams } from "next/navigation";

function Page() {
  const slug = useParams().slug;

  return (
    <HarryPotterLayout>
      <h1>{slug}</h1>
    </HarryPotterLayout>
  );
}

export default Page;
