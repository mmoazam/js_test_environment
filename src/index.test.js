import { expect } from "chai";
import jsdom from "jsdom";
import fs from "fs";

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});


describe("index.html", () => {
  it("should have h1 with text 'Hello World'", () => {
    const index = fs.readFileSync("./src/index.html", "utf8");
    const { JSDOM } = jsdom;
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementsByTagName("h1")[0];
    expect(h1.textContent).to.equal("Hello World!");
    dom.window.close();
  });
});

describe("index.html", () => {
  it("should have h1 with text 'Hello World'", () => {
    const index = fs.readFileSync("./src/index.html", "utf8");
    const { JSDOM } = jsdom;
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementById("helloworld");
    expect(h1.textContent).to.equal("goodbye World!");
    dom.window.close();
  });
});

