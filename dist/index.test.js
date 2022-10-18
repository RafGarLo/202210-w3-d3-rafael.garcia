import { double } from './tools';
describe('x is 3', () => {
    test('x should equal 3', () => {
        //recuerda Arrange, Act, Assert
        const x = 2;
        const expectedResult = 4;
        const r = double(x);
        expect(r).toBe(expectedResult);
    });
});
