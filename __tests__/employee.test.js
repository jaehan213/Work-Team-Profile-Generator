import {Employee} from '../lib/employee';

// ES Module error
// run: node --experimental-vm-modules node_modules/jest/bin/jest.js
// to run tests

describe('Employee class', ()=> {
    describe("get methods", () => {
        it("declares and gets", () => {
            const employee = new Employee("Jae Han", 
            405007, "jaehan213@gmail.com")
            expect(employee.getName()).toBe("Jae Han");
            expect(employee.getId()).toBe(405007);
            expect(employee.getEmail()).toBe("jaehan213@gmail.com");
            expect(employee.getRole()).toBe("Employee");
        });
    });
});