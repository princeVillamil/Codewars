/*
function yearDays(year)
{
  //your code here
  let days = year % 4 ? 365 :
               year % 100 ? 366:
               year % 400 ? 365 : 366;
  return `${year} has ${days} days`
}
*/
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(yearDays(0), '0 has 366 days');
Test.assertEquals(yearDays(-64), '-64 has 366 days');
Test.assertEquals(yearDays(2016), '2016 has 366 days');
Test.assertEquals(yearDays(1974), '1974 has 365 days');
Test.assertEquals(yearDays(-10), '-10 has 365 days');
Test.assertEquals(yearDays(666), '666 has 365 days');
Test.assertEquals(yearDays(1857), '1857 has 365 days');
  });
});
