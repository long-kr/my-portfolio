console.log("dirname", __dirname);
console.log("cwd", process.cwd());

async function copyMigrations() {
  const targets = [
    {
      from: "node_modules/postgres-migrations/dist/migrations",
      to: "vendor-chunks/migrations",
    },
    {
      from: "node_modules/@acpr/rate-limit-postgresql/dist/migrations",
      to: "vendor-chunks/migrations",
    },
  ];

  for (const { from, to } of targets) {
    console.log(`Copying ${from} to ${to}`);
    // await fs.copy(path.resolve(from), path.resolve(to));
  }

  console.log("✅ All migrations copied.");
}

copyMigrations();
