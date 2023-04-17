import axios from "axios";
import type { CurrentUser } from "@/types/current-user.types";

export const fetchCurrentUser = () => axios.get<CurrentUser>("user");
