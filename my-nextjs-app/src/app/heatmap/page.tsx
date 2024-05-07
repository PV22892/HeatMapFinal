"use client";
import HeatmapSelector, { DataTypeSelector } from "@/components/select";
import SearchComponent from "@/components/search";
import ButtonMap from "@/components/button";
import { Suspense } from "react";
import Button from "@/components/button";

export default function MainPage() {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-5xl font-semibold mb-7">HeatMaps</h1>
      <Suspense fallback={"Loading..."}>
        <HeatmapSelector />
        <DataTypeSelector />
        <SearchComponent />
        <Button />
      </Suspense>
    </main>
  );
}
