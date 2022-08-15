interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImp<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;
  get size() {
    return this._size;
  }
  push(value: T) {
    this._size++;
    const node = { value, next: this.head };
    this.head = node;
  }
  pop(): T {
    if (this.head == null) {
      throw new Error("Stack is empty");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImp<number>();
stack.push(1);
stack.push(2);
console.log(stack);
while (stack.size !== 0) console.log(stack.pop());
