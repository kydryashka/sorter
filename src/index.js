class Sorter {
  constructor() {
    this.arr=[];
    this.compareFunction=function(a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
}
  }

  add(element) {
     this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    indices.sort((a, b)=> {
      if (a > b) return 1;
      if (a < b) return -1;
  });
    var sortArr=[];
    
    for (var i=0;i<indices.length;i++){
      sortArr[i]=this.arr[indices[i]];
    }
    sortArr.sort(this.compareFunction);
    for (i=0;i<indices.length;i++){
      this.arr[indices[i]]=sortArr[i];
    }
  }

  setComparator(compareFunction) {
    this.compareFunction=compareFunction;
  }
}

module.exports = Sorter;