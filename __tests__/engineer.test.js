import {Engineer} from '../lib/engineer.js';

describe('Engineer class', ()=> {
    describe("get methods", () => {
        it("declares and gets", () => {
            const engineer = new Engineer("Jae Han", 
            405007, "jaehan213@gmail.com", "jaehan213")
            expect(engineer.getName()).toBe("Jae Han");
            expect(engineer.getId()).toBe(405007);
            expect(engineer.getEmail()).toBe("jaehan213@gmail.com");
            expect(engineer.getGithub()).toBe("jaehan213");
            expect(engineer.getRole()).toBe("Engineer");
        });
    });
});