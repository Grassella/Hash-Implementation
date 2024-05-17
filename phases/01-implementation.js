class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }

  insert(key, value) {
    // const index = this.hashMod(key);
    // let current = this.data[index];

    // const newPair = new KeyValuePair(key, value);
    // if (!current) {
    //   current = newPair;
    //   this.count++;
    // } else {
    //   while (current) {
    //     if (current.key === key) {
    //       current.value = value;
    //       return;
    //     }
    //     if (current.next === null) {
    //       break;
    //     } else {
    //       current = current.next;
    //     }
    //   }

    const index = this.hashMod(key);
    let current = this.data[index];

    // Handle updating value if key already exists
    while (current) {
      if (current.key === key) {
        current.value = value; // Update the value
        return;
      }
      current = current.next;
    }

    // Create new KeyValuePair and insert it at the beginning of the linked list
    const newPair = new KeyValuePair(key, value);
    newPair.next = this.data[index];
    this.data[index] = newPair;
    this.count++;
  }

  // newPair.next = current;
  // current = newPair;
  // this.count++;

  read(key) {
    // variable for index given the key parameter
    const index = this.hashMod(key);
    // variable for value at index derived from key parameter
    let current = this.data[index];

    // loops through indexes on linked list
    while (current) {
      //identifies currentVal's key
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }

    return undefined;
  }

  resize() {
    // Your code here
    return (this.capacity *= 2);
  }

  delete(key) {
    // Your code here
  }
}

// const hashTable = new HashTable(4);

// hashTable.insert("key1", "value1");
// hashTable.insert("key2", "value2");
// hashTable.insert("key3", "value3");
// console.log(current.value);

module.exports = HashTable;
