import Home from "@/components/screens/home/Home";
import { IRout } from "./navigation.typer";
import Auth from "@/components/screens/auth/Auth";

export const routes:IRout[] = [
  {
    name: 'Auth',
    component: Auth
  },
  {
    name: 'Home',
    component: Home
  }
]