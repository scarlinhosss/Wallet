export function formatToBRL(value) {
    value = value.replace(/[^\d]/g, "");

    value = (parseInt(value, 10) / 100).toFixed(2);

    let [integer, decimal] = value.split(".");
    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    
    return `${integer},${decimal}`;
}

document.getElementById("valor").addEventListener("input", function (e) {
    e.target.value = formatToBRL(e.target.value);
});
