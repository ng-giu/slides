FROM oven/bun:1-alpine

WORKDIR /app

# Install dependencies first for efficient layer caching
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy application source code
# Note: Container operates without host bind mounts, keeping Slidev editor changes ephemeral
COPY . .

# Ensure scripts are executable
RUN chmod +x scripts/*.sh

EXPOSE 3030

ENV PORT=3030 \
    NODE_ENV=development

ENTRYPOINT ["/app/scripts/docker-entrypoint.sh"]
CMD ["lab", "1"]
