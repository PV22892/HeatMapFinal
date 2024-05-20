"use client";
import HeatmapSelector, { DataTypeSelector } from "@/components/select";
import SearchComponent from "@/components/search";
import ButtonMap from "@/components/button";
import { Suspense } from "react";
import Button from "@/components/button";

export default function MainPage() {
  return (
    <main className="text-center pt-16 px-5">
      <Suspense fallback={"Loading..."}>
        <div className="w-full flex justify-between space-x-40">
          <HeatmapSelector />
          <DataTypeSelector />
          <SearchComponent />
        </div>
        <Button />
      </Suspense>
    </main>
  );
}
