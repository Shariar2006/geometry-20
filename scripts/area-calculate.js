function calculateTriangleArea(){
    const basefild = document.getElementById('triangle-base')
    const baseValueText = basefild.value;
    const base = parseFloat(baseValueText)
    

    const hightfild = document.getElementById('triangle-higth')
    const hightVlaueText = hightfild.value;
    const higth = parseFloat(hightVlaueText);
    

    const totalArea = 0.5 * base * higth;

    const areafild = document.getElementById('triangle-area');
    areafild.innerText = totalArea

    basefild.value = '';
    hightfild.value = '';
}