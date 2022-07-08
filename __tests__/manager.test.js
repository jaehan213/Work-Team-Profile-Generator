import {Manager} from '../lib/manager.js';

describe('Manager class', ()=> {
    describe("get methods", () => {
        it("declares and gets", () => {
            const manager = new Manager("Jae Han", 
            405007, "jaehan213@gmail.com", "123")
            expect(manager.getName()).toBe("Jae Han");
            expect(manager.getId()).toBe(405007);
            expect(manager.getEmail()).toBe("jaehan213@gmail.com");
            expect(manager.getOffice()).toBe("123");
            expect(manager.getRole()).toBe("Manager");
        });
    });
});