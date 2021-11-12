// SAHOVSKA TABLA//

document.write("<table>");
for (i = 1; i <= 8; i++) {
  document.write("<tr>");
  for (j = 1; j <= 8; j++) {
    if (i % 2 == 0) {
      if (j % 2 == 0) {
        document.write('<td class = "crnapolja"></td>');
      } else {
        document.write('<td class = "zutapolja"></td>');
      }
    } else {
      if (j % 2 !== 0) {
        document.write('<td class = "crnapolja"></td>');
      } else {
        document.write('<td class = "zutapolja"></td>');
      }
    }
  }
  document.write("</tr>");
}
document.write("</table>");
