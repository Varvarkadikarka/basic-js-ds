const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */


function removeKFromList(l, k) {
  let predPrev = new ListNode(-1); //создаем доп. узел перед списком, чтобы можно было пройтись по текущим элементам, включая первый.
  predPrev.next = l;
  let prev = predPrev;
  let cur = l;


  while (cur) { //проходим по всем элементам
    if (cur.value === k) {
      prev.next = cur.next; //если находим k, то разрываем связь м/у предыдущим и текущим
      cur = cur.next; //переходим на следующий элемент
    } else {
      prev = cur; //если не нашли, то переходим на след элемент
      cur = cur.next; // аналогично переходим
    }
  }
  return predPrev.next;
}


module.exports = {
  removeKFromList
};
