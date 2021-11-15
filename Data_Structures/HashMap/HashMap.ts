class HashMap {
  public keyMap: any[];
  public numItems: number;

  constructor(size = 53) {
    this.keyMap = new Array(size);
    this.numItems = 0;
  }

  _hash(key: string) {
    let hashIndex = 0;
    const PRIME_FACTOR = 31;

    for (let i = 0; i < Math.min(key.length, 37); i++) {
      const char = key[i];
      const charVal = char.charCodeAt(0);
      hashIndex = (hashIndex * PRIME_FACTOR + charVal) % this.keyMap.length;
    }

    return hashIndex;
  }

  _resize() {
    const oldMap = this.keyMap;
    const newMap = new Array(oldMap.length * 2);
    this.keyMap = newMap;

    oldMap.forEach((bucket) => {
      if (bucket) {
        bucket.forEach((bucketItem) => {
          const [key, value] = [bucketItem[0], bucketItem[1]];
          const hashIndex = this._hash(key);
          const newMapBucket = newMap[hashIndex];

          if (newMapBucket) {
            newMap[hashIndex].push([key, value]);
          } else {
            newMap[hashIndex] = [[key, value]];
          }
        });
      }
    });
  }

  set(key: string, value: any) {
    const loadFactor = this.numItems / this.keyMap.length;
    if (loadFactor > 0.8) this._resize();

    const keyVal = [key, value];
    const hashIndex = this._hash(key);
    const bucket = this.keyMap[hashIndex] ? this.keyMap[hashIndex] : [];

    if (!bucket.length) {
      bucket.push(keyVal);
      this.keyMap[hashIndex] = bucket;
      this.numItems++;
    } else {
      let bucketVal = bucket.find((bucketItem) => {
        return bucketItem[0] === key;
      });

      if (bucketVal) {
        bucketVal[1] = value;
      } else {
        bucket.push(keyVal);
        this.numItems++;
      }
    }
  }

  get(key: string): any {
    const hashIndex = this._hash(key);
    const bucket = this.keyMap[hashIndex];

    if (!bucket) {
      return undefined;
    } else {
      const bucketVal = bucket.find((bucketItem) => {
        return bucketItem[0] === key;
      });

      if (!bucketVal) {
        return undefined;
      }

      return bucketVal[1];
    }
  }

  keys() {
    const mapKeys = [];

    this.keyMap.forEach((bucket) => {
      if (bucket) {
        bucket.forEach((bucketItem) => {
          mapKeys.push(bucketItem[0]);
        });
      }
    });

    return mapKeys;
  }

  values() {
    const mapValues = [];

    this.keyMap.forEach((bucket) => {
      if (bucket) {
        bucket.forEach((bucketItem) => {
          mapValues.push(bucketItem[1]);
        });
      }
    });

    return mapValues;
  }
}

const hashMap = new HashMap(3);

hashMap.set("firstName", "Matt");
hashMap.set("lastName", "Matt");

console.log(hashMap.keyMap);
console.log("Table size: ", hashMap.keyMap.length);

hashMap.set("firstName", "Joe");
hashMap.set("name", "Joe");
hashMap.set("firstName", "Matt");

console.log("Table size: ", hashMap.keyMap.length);

console.log(hashMap.keyMap);

console.log(hashMap.get("firstName"));
console.log(hashMap.get("lastName"));

console.log(hashMap.keys());
console.log(hashMap.values());
