"use client";
import React from "react";
import { RecoilRoot } from "recoil";

function RecoilRootComponent({ children }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export default RecoilRootComponent;
