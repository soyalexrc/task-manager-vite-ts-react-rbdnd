import {Suspense, lazy} from "react";
import {Navigate, useRoutes} from "react-router-dom";
// layouts
import UserLayout from "@/shared/layouts/UserLayout";
import AuthLayout from "@/shared/layouts/AuthLayout";
import NotFoundLayout from "@/shared/layouts/NotFoundLayout";
// guards
// components
import LoadingScreen from "@/shared/components/LoadingScreen";
import UserProtectedRoute from "./guards/UserProtectedRoute";

const Loadable = (Component: any) => (props: any) => {
  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            top: 0,
            left: 0,
            width: 1,
            zIndex: 9999,
            position: "fixed",
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "*",
      element: <NotFoundLayout/>,
      children: [
        {path: "404", element: <NotFoundComponent/>},
        {path: "*", element: <Navigate to="/404" replace/>},
      ],
    },
    {
      path: '/',
      element: (
        // <UserProtectedRoute>
          <UserLayout/>
        // </UserProtectedRoute>
      ),
      children: [
        {path: '', element: <DashboardComponent/>},
        {path: 'board/:id', element: <TaskBoardComponent/>},

      ]
    },
    {
      path: 'auth',
      element: <AuthLayout/>,
      children: [
        {path: '', element: <LoginComponent/>},
        {path: 'register', element: <RegisterComponent/>},
        {path: 'forgot-password', element: <ForgotPasswordComponent/>},
        {path: 'change-password', element: <ChangePasswordComponent/>},

      ]
    }
  ])
}


const NotFoundComponent = Loadable(lazy(() => import('../shared/components/NotFoundComponent')));

// home
const DashboardComponent = Loadable(lazy(() => import('../features/dashboard/pages/DashboardComponent')));

// task board
const TaskBoardComponent = Loadable(lazy(() => import('../features/taskBoard/pages/TaskBoardComponent')));


//auth
const LoginComponent = Loadable(lazy(() => import('../features/auth/pages/LoginComponent')));
const RegisterComponent = Loadable(lazy(() => import('../features/auth/pages/RegisterComponent')));
const ForgotPasswordComponent = Loadable(lazy(() => import('../features/auth/pages/ForgotPasswordComponent')));
const ChangePasswordComponent = Loadable(lazy(() => import('../features/auth/pages/ChangePasswordComponent')));
