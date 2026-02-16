FROM node:latest

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml ./
COPY apps/frontend/package.json ./apps/frontend/

RUN pnpm install

COPY . .

WORKDIR /app/apps/frontend
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "preview", "--port", "3000", "--host"]