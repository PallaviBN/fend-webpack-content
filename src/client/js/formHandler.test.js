import { handleSubmit } from './formHandler';

//test to check that handleSubmit() method exists
describe('Method "handleSubmit()" should exist', () => {
    test("Should return true", () => {
        expect(handleSubmit).toBeDefined();
    });
});

//test to check that handleSubmit() is a function
describe('Method "handleSubmit()" should be a function', () => {
    test("Should be a function", () => {
        expect(typeof handleSubmit).toBe("function");
    });
});
