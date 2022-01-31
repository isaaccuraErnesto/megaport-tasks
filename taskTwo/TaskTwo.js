const testObject = {
  name: 'Megaport',
  address: {
    office: {
      unit: 'Level 3',
      street: '825 Ann Street',
      suburb: 'Fortitude Valley',
      city: 'Brisbane',
      state: 'Queensland',
      postcode: 4006,
    },
  },
  industry: {
    type: 'Internet and telecommunications',
    asxListed: true,
  },
};

const getValue = (path, object = testObject) => {
  let errorCount = 0;
  let value = Object.assign(object);
  path.split('.').forEach((key) => {
    if (value.hasOwnProperty(key)) {
      value = value[key];
    } else {
      if (errorCount < 1) {
        console.log(`A value was not found for ${key}`);
        errorCount += 1;
      }
    }
  });
  if (errorCount < 1) {
    return value;
  }
};

getValue('address.office.suburb');
getValue('industry.asxListed');
