"use client";

import "swiper/css";
import "swiper/css/autoplay";
import Cookies from "js-cookie";
import { useCallback, useEffect } from "react";

import { useAppDispatch } from "@/store/hooks";
import { useSearchParams } from "next/navigation";
import Loading from "@/Component/Loading/Loading";

export default function Token() {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const ACCESS_TOKEN = searchParams.get("Authorization");
  const REFRESH_TOKEN = searchParams.get("RefreshToken");

  const saveCookiesAndRedirect = useCallback(() => {
    if (ACCESS_TOKEN && REFRESH_TOKEN) {
      Cookies.set("Authorization", ACCESS_TOKEN, {
        path: "/",
        httpOnly: false,
        secure: true,
        sameSite: "None",
        readOnly: false,
      });
      Cookies.set("RefreshToken", REFRESH_TOKEN, {
        path: "/",
        httpOnly: false,
        secure: true,
        sameSite: "None",
        readOnly: false,
      });
    }
  }, [ACCESS_TOKEN, REFRESH_TOKEN]);

  useEffect(() => {
    saveCookiesAndRedirect();
    // window.location.replace("/");
  }, [saveCookiesAndRedirect]);

  return <Loading />;
}
