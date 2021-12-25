$("#presencial").click(function showPresencial() {
    document.getElementById("#presencialPart").style.display="grid";
    document.getElementById("#NoPresencialPart").style.display="none";
});
$("#nopresencial").click(function showNoPresencial() {
    document.getElementById("#presencialPart").style.display="none";
    document.getElementById("#NoPresencialPart").style.display="grid";
});