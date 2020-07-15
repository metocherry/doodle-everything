import { Stack } from "./stack";

describe("Stack", () => {
    it("Push()를 호출하면, 사이즈는 증가한다.", () => {
        const stack = new Stack<number>();
        stack.push(1);

        expect(stack.size()).toBe(1);

        stack.push(2);

        expect(stack.size()).toBe(2);
    });

    it("Pop()을 호출하면, 사이즈는 감소한다.", () => {
        const stack = new Stack<number>();
        stack.push(1);
        stack.push(2);

        stack.pop();

        expect(stack.size()).toBe(1);

        stack.pop();
        stack.pop();
        expect(stack.size()).toBe(0);
    });

    it("peek()를 호출하면, 가장 위에있는 데이터를 리턴한다.", () => {
        const stack = new Stack<number>();
        stack.push(1);
        stack.push(2);

        expect(stack.peek()).toBe(2);

        stack.pop();
        stack.pop();
        stack.pop();
        expect(stack.peek()).toBe(null);
    });

    it("empty()를 호출하면, 스택이 비어있는지 판단할 수 있다.", () => {
        const stack = new Stack<number>();
        stack.push(1);

        expect(stack.empty()).toBe(false);

        stack.pop();
        expect(stack.empty()).toBe(true);
    });
});
