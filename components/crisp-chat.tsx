"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("16b6d9c1-92db-45bc-b3b2-1e97e2a7e395");
  }, []);

  return null;
};
