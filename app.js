"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QuestionStatus;
(function (QuestionStatus) {
    QuestionStatus["PUBLISHED"] = "published";
    QuestionStatus["DRAFT"] = "draft";
    QuestionStatus["DELETED"] = "deleted";
})(QuestionStatus || (QuestionStatus = {}));
async function getFaqs(req) {
    const res = await fetch("/faqs", {
        method: "POST",
        body: JSON.stringify(req),
    });
    const data = await res.json();
    return data;
}
//# sourceMappingURL=app.js.map