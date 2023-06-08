export default function accessImmutableObject(object, array) {
    let value = object;
  
    for (const key of array) {
      if (value && (typeof value === 'object' || value instanceof Map)) {
        value = value.get ? value.get(key) : value[key];
      } else {
        return undefined;
      }
    }
  
    return value;
}  