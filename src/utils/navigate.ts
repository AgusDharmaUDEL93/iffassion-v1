import { NextRouter } from "next/router";
import { scrollToTop } from "./scroll";

export default function navigate(router: NextRouter, path: string) {
  if (router.asPath == path) {
    scrollToTop();
    return;
  }
  router.push(path);
}
