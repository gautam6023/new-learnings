import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

//Below function is used to merge tailwind classes with other classes
export function classNameMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
