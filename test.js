console.log("Running Node.js Test...");

const result = 10 + 20;

if (result === 30) {
    console.log("TEST PASSED");
    process.exit(0);
} else {
    console.log("TEST FAILED");
    process.exit(1);
}
