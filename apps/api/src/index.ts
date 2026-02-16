import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { prisma } from "./utils/prisma.js";

const app = new Hono().get("/users", async (c) => {
	const users = await prisma.user.findMany();
	return c.json({ users });
});

// export api specification
export type AppType = typeof app;

serve(
	{
		fetch: app.fetch,
		port: 8000,
		hostname: "0.0.0.0"
	},
	(info) => {
		console.log(`Server is running on http://0.0.0.0:${info.port}`);
	},
);
