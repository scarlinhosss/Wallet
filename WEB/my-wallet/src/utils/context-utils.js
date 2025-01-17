export function getDataFromLocalStorage(key, initialValue) {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
        console.log(error);
    }
}

export function saveOnLocalStorage(key, value) {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
          console.log(error);
      }
}