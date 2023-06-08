import accessImmutableObject from './accessImmutableObject';

const object = {
  name: {
    first: 'Guillaume',
    last: 'Salva',
  },
};

const result = accessImmutableObject(object, ['name', 'first']);
console.log(result);