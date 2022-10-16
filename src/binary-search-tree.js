const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootNode = null; //ссылка на корень, пока нет элемента
  }

  root() {
    if (!this.rootNode) {
      return null;
    } else {
      return this.rootNode;
    }
  }

  add(data) {
    this.rootNode = findPlace(this.rootNode, data);

    function findPlace(node, data) {
      if (!node) { //точка остановки рекурсии
        return new Node(data); //пустая позиция
      }

      if (node.data === data) { //одинаковое значение
        return node;
      }

      if (data < node.data) {
        node.left = findPlace(node.left, data);
      } else {
        node.right = findPlace(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return isItExists(this.rootNode, data);
    function isItExists(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? 
        isItExists(node.left, data) :
        isItExists(node.right, data);
    }
  }

  find(data) {
    return isItExists(this.rootNode, data);
    function isItExists(node, data) {
      if (node === null) {
        return null;
      } else if (data < node.data) {
        return isItExists(node.left, data);
      } else if (data > node.data) {
        return isItExists(node.right, data);
      } else {
        return node;
      }
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right; //вместо текущего узла положим все дерево под ним
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right; //начинаем с корня правого поддерева. вместо узла поставить существующий узел для этого нужно найти, либо минимум из правого поддерева, либо максимум из левого поддерева.
        //минимум среди правого поддерева. Правы обход: идем к максимуму и выводим от большего к мньшемую Левый обход: идем к минимуму и выводим от меньшего к большего.
        while (minFromRight.left) {//если слева нет элемента, то достигли самого маленького
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;//помещаем узел с минимальным значением

        node.right = removeNode(node.right, minFromRight.data); //удаляем узел с минимальным значением из правого поддерева и обновляем его

        return node;
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return; //возвращаем undefined
    }

    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootNode) {
      return; //возвращаем undefined
    }

    let node = this.rootNode;
    while (node.right) { //если есть элемент больше, то перейдем к нему
      node = node.right;
    }

    return node.data;
  }
}

const tree = new BinarySearchTree();
console.log( tree.find(8));

module.exports = {
  BinarySearchTree
};