import { checkForValidation } from "./urlChecker";

describe('URL Test', () => {
    it('Returns true on valid url', () => {
        expect(checkForValidation('https://www.youtube.com/')).toBe(true);
    })

    it('Returns false on invalid url', () => {
        expect(checkForValidation('nope')).toBe(false);
    })
})