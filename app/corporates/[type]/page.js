"use client";
import dynamic from "next/dynamic";

const contentMap = {
  insurance: () => import("../insurance/page"),
  wellness: () => import("../wellness/page"),
};

export default function CorporateDynamicPage({ params }) {
  const { type } = params;

  const DynamicComponent = dynamic(contentMap[type] || (() => import("../components/NotFound")));

  return <DynamicComponent />;
}
