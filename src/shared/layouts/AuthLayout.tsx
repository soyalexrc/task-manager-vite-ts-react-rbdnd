import React from 'react';
import {Outlet} from "react-router-dom";

export default function AuthLayout() {
  return (
    <div>
      <div>top</div>
      <div>hello world from AuthLayout</div>
      <Outlet />
      <div>bottom</div>
    </div>
  )
}
