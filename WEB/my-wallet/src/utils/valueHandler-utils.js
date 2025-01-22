export function formatToBRL(value, type) {
    if (!value) return value; 
    
    let newValue = typeof value === "number"
        ? value.toFixed(2).replace(/[^\d]/g, "")
        : value.replace(/[^\d]/g, "");
    
    if (!newValue) return "";

    newValue = (parseInt(newValue, 10) / 100).toFixed(2);

    let [integer, decimal] = newValue.split(".");
    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    
    return `R$${type === "expense" ? "-" : ""}${integer},${decimal}`;
}
