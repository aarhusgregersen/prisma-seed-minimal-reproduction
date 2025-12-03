/**
 * Minimal seed function for reproduction
 * This should be called when running: pnpx prisma db seed
 */

async function seed() {
  console.log("🌱 Seed function is executing!");
  console.log(
    "If you see this message, the seed command is working correctly.",
  );
  console.log(
    "If you DON'T see this message, the seed command is not being triggered.",
  );

  // Simulate some async work
  await new Promise((resolve) => setTimeout(resolve, 100));

  console.log("✅ Seed completed successfully");
}

// Execute seed function
seed()
  .catch((error) => {
    console.error("❌ Seed failed with error:");
    console.error(error);
    process.exit(1);
  })
  .then(() => {
    console.log("👋 Exiting seed process");
    process.exit(0);
  });
