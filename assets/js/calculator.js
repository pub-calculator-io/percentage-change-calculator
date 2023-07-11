function calculate() {
    const v1 = input.get('v1').number().val();
    const v2 = input.get('v2').number().val();

    if (!input.valid()) return;

    const change = v2 - v1;
    const percentageChange = roundTo((change / Math.abs(v1)) * 100, 2);

    let changeText = "";
    if (percentageChange > 0) {
        changeText = percentageChange + "% increase";
    } else if (percentageChange < 0) {
        changeText = (0 - percentageChange) + "% decrease";
    } else {
        changeText = "No changes";
    }

    _('result').innerHTML = changeText;
}