"use client"

import { useNavigationContainer } from "@/components/containers";
import { NavigationView } from "@/components/presentational";

const Navigation = () => {
  const containerProps = useNavigationContainer();
  return <NavigationView {...containerProps} />;
};

export { Navigation };
export default Navigation;
