function bootNavigation(mapLoaded) {
  try {
    console.log(`Is Navigation loaded: ${mapLoaded}`);
    if (!mapLoaded) {
      throw new Error("Map was not passed in the funciton");
    }
    return "NAV_OK";
  } catch (error) {
    console.log(error);
    console.log(`Navigation failed: ${error.message}`);
  } finally {
    console.log("Navigation Sequence completed");
  }
}
const status = bootNavigation(true);
console.log(`Result: ${status}`);
