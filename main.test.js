import { afterEach, beforeEach, describe, test, vi, skip } from "vitest";
import { expect } from "vitest";
import { resetBar, getRandomCharFromString } from "./utils/utils";

// describe.skip("testableFunction", () => {
//     afterEach(() => {
//         vi.restoreAllMocks();
//     });

//     test("test spy", () => {
//         vi.spyOn(total, "getTotal").mockReturnValue(5);
//         console.log(total.getTotal());
//         expect(testableFunction(3)).toBe(8);
//     });

//     test("should return 10", () => {
//         vi.spyOn(total, "getTotal").mockReturnValue(8);
//         expect(testableFunction(2)).toBe(10);
//     });

//     test.skip("should return 9", () => {
//         vi.unmock("./utils/total.js");
//         vi.mock("./utils/total.js", () => {
//             return {
//                 getTotal: vi.fn().mockImplementation(() => 20),
//                 namedExport: vi.fn(),
//             };
//         });
//         expect(testableFunction(1)).toBe(11);
//     });
// });

/**
 * @vitest-environment jsdom
 */
describe("resetBar", () => {
    test("should remove all classes", () => {
        const divArray = [];
        for (let i = 0; i < 4; i++) {
            const div = document.createElement("div");
            div.classList.add("strength-bar", "bg-red");
            divArray.push(div);
        }
        resetBar(divArray);
        divArray.forEach((div) => {
            expect(div.classList.contains("bg-red")).toBe(false);
            expect(div.classList.contains("strength-bar-empty")).toBe(true);
        });
    });

    test("should have bg-red class", () => {
        const divArray = [];
        for (let i = 0; i < 4; i++) {
            const div = document.createElement("div");
            div.classList.add("strength-bar", "bg-red");
            divArray.push(div);
        }

        divArray.forEach((div) => {
            expect(div.classList.contains("bg-red")).toBe(true);
        });
    });

    test("should remove bg-red bg-orange bg-yellow bg-green classes", () => {
        const divArray = [];
        for (let i = 0; i < 4; i++) {
            const div = document.createElement("div");
            div.classList.add(
                "strength-bar",
                "bg-red",
                "bg-orange",
                "bg-yellow",
                "bg-green"
            );
            divArray.push(div);
        }

        resetBar(divArray);
        divArray.forEach((div) => {
            expect(div.classList.contains("bg-red")).toBe(false);
            expect(div.classList.contains("bg-orange")).toBe(false);
            expect(div.classList.contains("bg-yellow")).toBe(false);
            expect(div.classList.contains("bg-green")).toBe(false);
        });
    });
});

describe("generate a random character", () => {
    test("should return a", () => {
        const randomCharacter = getRandomCharFromString("a");
        expect(randomCharacter).toBe("a");
    });

    test("should return b", () => {
        const randomCharacter = getRandomCharFromString("b");
        expect(randomCharacter).toBe("b");
    });
});
