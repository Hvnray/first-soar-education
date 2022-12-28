import { useEffect, useState } from "react";

import { useRouter } from "next/router";

export function useNavbarObserver() {
  const [windowWidth, setWindowWidth] = useState(0);
  function navBarResizeObs(entries: ResizeObserverEntry[]) {
    let width = 0;
    for (const entry of entries) {
      if (entry.borderBoxSize) {
        const borderBoxSize = Array.isArray(entry.borderBoxSize)
          ? entry.borderBoxSize[0]?.inlineSize
          : entry.borderBoxSize;
        width = (borderBoxSize as number) || 0;
      }
    }
    setWindowWidth(width);
  }

  useEffect(() => {
    const resizeObserver = new ResizeObserver(navBarResizeObs);
    const navbar = document.getElementById("navHeader");
    if (navbar) {
      resizeObserver.observe(navbar);
    }
    return () => {
      if (navbar) {
        resizeObserver.disconnect();
      }
    };
  }, []);
  return windowWidth;
}

export function useFacebookPixelTracker() {
  const router = useRouter();
  useEffect(() => {
    const pixel_id = process.env.NEXT_PUBLIC_FB_PIXEL_ID!;
    let ReactPixel: typeof import("./node_modules/react-facebook-pixel/types/index");
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((FBReactPixel) => {
        ReactPixel = FBReactPixel;
        ReactPixel.init(pixel_id); // facebookPixelId
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
    return () => {
      if (ReactPixel) {
        router.events.off("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      }
    };
  }, [router.events]);
}
