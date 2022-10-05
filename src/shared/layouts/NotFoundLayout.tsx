import {Outlet} from "react-router-dom";
import React from "react";

export default function NotFoundLayout() {
  return (
    <div>
      <div>top</div>
      <div>hello world from NotFoundLayout</div>
      <Outlet />
      <div>bottom</div>
    </div>
  )
}
