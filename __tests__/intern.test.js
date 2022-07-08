import {Intern} from '../lib/intern.js';

describe('Intern class', ()=> {
    describe("get methods", () => {
        it("declares and gets", () => {
            const intern = new Intern("Jae Han", 
            405007, "jaehan213@gmail.com", "UCLA")
            expect(intern.getName()).toBe("Jae Han");
            expect(intern.getId()).toBe(405007);
            expect(intern.getEmail()).toBe("jaehan213@gmail.com");
            expect(intern.getSchool()).toBe("UCLA");
            expect(intern.getRole()).toBe("Intern");
        });
    });
});