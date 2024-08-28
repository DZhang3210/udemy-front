import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import React from "react";

export const revalidate = 0;

export default async function HomePage() {
  const billboard = await getBillboard("ace54efd-7b7e-4a16-834b-29b9fe09f758");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
}
