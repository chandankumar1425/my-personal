import data from "../../submissionData.json"; // do not create this file
import "cypress-localstorage-commands";
// let subdata = [{ submission_link: "http://localhost:8080/", id: 67890 }];

const Data = [
  {
    name: "S",
    desc: "D",
    start: "2020-01-01",
    end: "2020-01-02",
    priority: "Low",
  },
  {
    name: "C",
    desc: "D",
    start: "2020-01-01",
    end: "2020-01-02",
    priority: "Medium",
  },
  {
    name: "A",
    desc: "D",
    start: "2020-01-01",
    end: "2020-01-02",
    priority: "High",
  },
];
function modifyUrl(url) {
  let split = url.split(".netlify.app");
  return split[0] + ".netlify.app";
}

// import { start, submitData } from "../../../data";
describe("Test", function () {
  let acc_score = 1;

  function FormSubmit(data, score, LSLen) {
    cy.get("#name").clear().type(data.name);
    cy.get("#desc").clear().type(data.desc);
    cy.get("#start").clear().type(data.start);
    cy.get("#end").clear().type(data.end);
    cy.get("#priority").select(data.priority);
    cy.get("form")
      .submit()
      .should(() => {
        expect(JSON.parse(localStorage.getItem("task-list")).length).to.equal(
          LSLen
        );
      })
      .then(() => {
        acc_score += score;
      });
  }

  function CheckTable(data, score, index) {
    cy.get("tr").eq(index).contains("td", data.name);
    cy.get("tr").eq(index).contains("td", data.desc);
    cy.get("tr").eq(index).contains("td", data.start);
    cy.get("tr").eq(index).contains("td", data.end);
    cy.get("tr")
      .eq(index)
      .contains("td", data.priority)
      .then(() => {
        acc_score += score;
      });
  }

  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {
      // modifyUrl(url);
      beforeEach(() => {
        cy.restoreLocalStorage();
      });

      afterEach(() => {
        cy.saveLocalStorage();
      });
      it("Form Submit is Working Fine", () => {
        cy.visit(url);
        FormSubmit(Data[0], 1, 1);
      }); // Score:- 1
      it("Check the Data after mutiple form submits", () => {
        FormSubmit(Data[1], 0.5, 2);
        FormSubmit(Data[2], 0.5, 3);
      }); // Score:- 1
      it("Check the Dashboard page's Table", () => {
        cy.visit(url + "/dashboard.html");
        CheckTable(Data[0], 1 / 3, 1);
        CheckTable(Data[1], 1 / 3, 2);
        CheckTable(Data[2], 1 / 3, 3);
      }); // Score:- 1
      it("Check the total Table size", () => {
        cy.get("#task-count")
          .contains(3)
          .then(() => {
            acc_score += 1;
          });
      }); // Score:- 1
      it("Check Filtering in Done", () => {
        cy.get("select").select("Medium");
        CheckTable(Data[1], 0.5, 1);
        cy.get("select").select("");
        cy.get("tr")
          .should("have.length", 4)
          .then(() => {
            acc_score += 0.5;
          });
        cy.reload();
      }); // Score:-1
      it("Add  To Progress and Check the Deleting", () => {
        cy.get("tr").eq(1).contains("td", "Add").click();
        CheckTable(Data[1], 1, 1); // Checking the Deleting
      }); // Score:- 1
      it("Visit Progress Page and Check Table", () => {
        cy.visit(url + "/Progress.html");
        CheckTable(Data[0], 1, 1);
      }); // Score:- 1
      it("Add  To Done and Check the Deleting", () => {
        cy.get("tr").eq(1).contains("td", "Add").click();
        cy.get("tr")
          .should("have.length", 1)
          .then(() => {
            acc_score += 1;
          });
      }); // Score:- 1
      it("Check The Done Page", () => {
        cy.visit(url + "/Done.html");
        CheckTable(Data[0], 1, 1);
      }); // Score:- 1
    }

    it(`generate score`, () => {
      //////////////
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
