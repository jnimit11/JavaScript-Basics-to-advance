function myCompany() {
  function ca(name) {
    console.log(`name of your company is ${name}`);
  }
  return ca;
}
const getMeAcompany = myCompany();
const yourComany = getMeAcompany("golu");

