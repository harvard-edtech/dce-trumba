"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrumbaErrorCode = exports.RegistrationQuestionFieldType = exports.initTrumbaAPI = void 0;
// Import main initializer function
var endpoints_1 = __importDefault(require("./endpoints"));
exports.initTrumbaAPI = endpoints_1.default;
// Import types
var RegistrationQuestionFieldType_1 = __importDefault(require("./types/RegistrationQuestionFieldType"));
exports.RegistrationQuestionFieldType = RegistrationQuestionFieldType_1.default;
var TrumbaErrorCode_1 = __importDefault(require("./types/TrumbaErrorCode"));
exports.TrumbaErrorCode = TrumbaErrorCode_1.default;
//# sourceMappingURL=index.js.map