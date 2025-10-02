import { type Registry } from "shadcn/schema";

// TODO: Use an Object as the source of truth for the registry.
// Right now the source of truth is registry.json which is being written by hand.
export const REGISTRY = {
  name: "Shadcraft",
  homepage: "https://shadcraft.com/",
  items: [],
} satisfies Registry;
