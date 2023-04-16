const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.rootThree = null;
  }

  

  root() {
    return this.rootThree;
  }



  add(val) {
    const newNode = new Node(val);

    if (this.rootThree === null) {
      this.rootThree = newNode;
      return;
    }

    let currant = this.rootThree;
    while (currant) {

      if (newNode.data < currant.data) {

        if (currant.left !== null) currant = currant.left;
        else {
          currant.left = newNode;
          return;
        }
      }
      else {

        if (currant.right !== null) currant = currant.right;
        else {
          currant.right = newNode;
          return;
        }
      }
    }
  }



  has(val) {

    let currant = this.rootThree;

    while (currant) {

      if (currant === null) return false;

      if (val === currant.data) return true;

      else if (val < currant.data) {

        if (currant.left === null) return false;
        else currant = currant.left;
      }

      else if (val > currant.data) {

        if (currant.right === null) return false;
        else currant = currant.right;
      }
    }
  }



  find(val) {

    let currant = this.rootThree;

    while (currant) {

      if (currant === null) return null;

      if (val === currant.data) return currant;

      else if (val < currant.data) {

        if (currant.left === null) return null;
        else currant = currant.left;
      }

      else if (val > currant.data) {

        if (currant.right === null) return null;
        else currant = currant.right;
      }
    }
  }



  remove(val) {

    const deleted = (node, val) => {

      if (node === null) return null;

      else if (node.data > val) {
        node.left = deleted(node.left, val)
        return node;
      }

      else if (node.data < val) {
        node.right = deleted(node.right, val)
        return node;
      }

      else if (node.data === val) {

        if (node.left === null && node.right === null) return null

        else if (node.left === null) return node.right;

        else if (node.right === null) return node.left;

        let currant = node.right;
        while (currant.left) {
          currant = currant.left
        }

        node.data = currant.data;
        node.right = deleted(node.right, currant.data)

        return node
      }
    }

    this.rootThree = deleted(this.rootThree, val);
  }



  min() {

    if (this.rootThree === null) return null;

    else if (this.rootThree.left === null) return this.rootThree.data;

    else {

      let currant = this.rootThree;
      while (currant) {

        if (currant.left !== null) currant = currant.left;

        else {
          return currant.data;
        }
      }
    }
  }

  max() {

    if (this.rootThree === null) return null;

    else if (this.rootThree.right === null) return this.rootThree.data;

    else {

      let currant = this.rootThree;
      while (currant) {

        if (currant.right !== null) currant = currant.right;

        else {
          return currant.data;
        }
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};