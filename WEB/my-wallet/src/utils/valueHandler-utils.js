export function formatToBRL(value) {
    if (!value) return value;

    let newValue = value.replace(/[^\d]/g, "");

    newValue = (parseInt(newValue, 10) / 100).toFixed(2);

    let [integer, decimal] = newValue.split(".");
    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    
    return `${integer},${decimal}`;
}
