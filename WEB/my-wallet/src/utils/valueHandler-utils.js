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

export function formatThousandToBRL(value, type) {
    if (!value) return value;
    
    let newValue = typeof value === "number"
        ? value.toString().replace(/[^\d]/g, "")
        : value.replace(/[^\d]/g, "");
    
    if (!newValue) return "";
    
    if (newValue.length <= 2) {
        newValue = newValue.padStart(3, "0");
    }
    
    let integerPart = newValue.slice(0, -2);
    let decimalPart = newValue.slice(-2);
    
    integerPart = integerPart.replace(/^0+/, "") || "0";
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    
    return `R$${type === "expense" ? "-" : ""}${integerPart},${decimalPart}`;
}
