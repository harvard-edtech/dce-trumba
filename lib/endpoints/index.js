"use strict";
/**
 * All endpoints for the Trumba API
 * @author Yuen Ler Chow
 * @author Gabe Abrams
 * @namespace api
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import libs
var axios_1 = __importDefault(require("axios"));
// Import shared types
var ErrorCode_1 = __importDefault(require("../shared/types/ErrorCode"));
var trumbaCodeMessageMap_1 = __importDefault(require("../shared/constants/trumbaCodeMessageMap"));
// Import custom error
var TrumbaError_1 = __importDefault(require("../shared/classes/TrumbaError"));
/**
 * Initialize Trumba API
 * @ignore
 * @param auth Trumba auth credentials
 * @returns initialized copy of the Trumba API
 */
var initTrumbaAPI = function (auth) {
    /**
     * Lists all events on the calendar that satisfy the provided filters
     * @author Yuen Ler Chow
     * @instance
     * @memberof api
     * @method listEvents
     * @param webName unique identifier for the calendar
     * @param {object} filter object containing all arguments
     * @param {number} filter.numEvents number of events to return
     * @param {number[]} filter.eventIds list of event ids to return
     * @param {Date} filter.startDate start date of events to return
     * @param {Date} filter.endDate end date of events to return
     * @param {number} filter.months number of months to return
     * @param {number} filter.weeks number of weeks to return
     * @param {number} filter.days number of days to return
     * @param {number} filter.previousWeeks number of previous weeks to return
     * @param {string} filter.filterView filter view to use
     * @param {string} filter.search search query
     * @param {boolean} filter.html whether to return HTML
     * @param {boolean} filter.customNotes whether to return custom notes
     *   the source course
     * @returns a list of information for each event {@link https://app.swaggerhub.com/apis-docs/Trumba/Published-Events/1S}
     */
    var listEvents = function (webName, filter) { return __awaiter(void 0, void 0, void 0, function () {
        var numEvents, eventIds, startDate, endDate, months, weeks, days, previousWeeks, filterView, search, html, customNotes, params, response, err_1, responseData;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    numEvents = filter.numEvents, eventIds = filter.eventIds, startDate = filter.startDate, endDate = filter.endDate, months = filter.months, weeks = filter.weeks, days = filter.days, previousWeeks = filter.previousWeeks, filterView = filter.filterView, search = filter.search, html = filter.html, customNotes = filter.customNotes;
                    params = {
                        events: numEvents,
                        eventid: eventIds.length == 1 ? eventIds[0] : undefined,
                        eventids: eventIds.length > 1 ? eventIds.join(',') : undefined,
                        startdate: startDate.toISOString(),
                        enddate: endDate.toISOString(),
                        months: months,
                        weeks: weeks,
                        days: days,
                        previousweeks: previousWeeks,
                        filterview: filterView,
                        search: search,
                        html: html,
                        customnotes: customNotes,
                    };
                    return [4 /*yield*/, axios_1.default.get("http://www.trumba.com/calendars/".concat(webName, ".json"), { params: params })];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    err_1 = _c.sent();
                    responseData = (_a = err_1 === null || err_1 === void 0 ? void 0 : err_1.response) === null || _a === void 0 ? void 0 : _a.data;
                    // we do this because for some reason response.data doesn't format properly
                    if (((_b = err_1 === null || err_1 === void 0 ? void 0 : err_1.response) === null || _b === void 0 ? void 0 : _b.statusText) === 'Not Found') {
                        throw new TrumbaError_1.default({
                            message: 'The web name was not found.',
                            code: ErrorCode_1.default.WebNameNotFound,
                        });
                    }
                    if (!responseData) {
                        // No information on the error
                        // (this is an unknown error)
                        throw new TrumbaError_1.default({
                            message: 'An unknown error occurred.',
                            code: ErrorCode_1.default.UnknownError,
                        });
                    }
                    throw new TrumbaError_1.default({
                        message: responseData[responseData.length - 1].errorMessage,
                        code: trumbaCodeMessageMap_1.default[responseData[responseData.length - 1]],
                    });
                case 3: return [2 /*return*/];
            }
        });
    }); };
    /**
    * Registers a user for an event on the calendar
    * @author Yuen Ler Chow
    * @instance
    * @memberof api
    * @method registerForEvent
    * @param {object} registration object containing registration information such as event id, name, email, and status
    * @param {number} registration.eventId id of the event to register for
    * @param {string} registration.name name of the person registering
    * @param {string} registration.email email of the person registering
    * @param {string} registration.status status of the person registering
    * @param {string} registration.eventTitle title of the event
    * @param {string} registration.startDateTime start date and time of the event
    * @param {string} registration.endDateTime end date and time of the event
    * @param {string} registration.startDateTimeLocal end date and time of the event in local time
    * @param {string} registration.endDateTimeLocal end date and time of the event in local time
    * @param {FormAnswer[]} registration.formAnswers answers to the form questions
    *
    *
    * @returns object containing attendee and event information {@link https://app.swaggerhub.com/apis-docs/Trumba/Trumba-Management-API/2.0#/Registration/put_attendees}
    */
    var registerForEvent = function (registration) { return __awaiter(void 0, void 0, void 0, function () {
        var eventId, name, email, status, eventTitle, formAnswers, request, response, attendee, err_2, responseData;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    eventId = registration.eventId, name = registration.name, email = registration.email, status = registration.status, eventTitle = registration.eventTitle, formAnswers = registration.formAnswers;
                    request = {
                        eventID: eventId,
                        name: name,
                        email: email,
                        status: status,
                        eventTitle: eventTitle,
                        formAnswers: formAnswers,
                    };
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.put('https://www.trumba.com/api/v2/attendees', request, { auth: auth })];
                case 2:
                    response = _b.sent();
                    attendee = {
                        eventId: response.data.eventID,
                        name: response.data.name,
                        email: response.data.email,
                        status: response.data.status,
                        eventTitle: response.data.eventTitle,
                        startDateTime: new Date(response.data.startDateTime),
                        endDateTime: new Date(response.data.endDateTime),
                        startDateTimeLocal: new Date(response.data.startDateTimeLocal),
                        endDateTimeLocal: new Date(response.data.endDateTimeLocal),
                        formAnswers: response.data.formAnswers,
                    };
                    return [2 /*return*/, attendee];
                case 3:
                    err_2 = _b.sent();
                    responseData = (_a = err_2 === null || err_2 === void 0 ? void 0 : err_2.response) === null || _a === void 0 ? void 0 : _a.data;
                    if (!responseData) {
                        // No information on the error
                        // (this is an unknown error)
                        throw new TrumbaError_1.default({
                            message: 'An unknown error occurred.',
                            code: ErrorCode_1.default.UnknownError,
                        });
                    }
                    throw new TrumbaError_1.default({
                        message: responseData[responseData.length - 1].errorMessage,
                        code: trumbaCodeMessageMap_1.default[responseData[responseData.length - 1]],
                    });
                case 4: return [2 /*return*/];
            }
        });
    }); };
    /**
     * Lists all events a user is registered for on the calendar
     * @author Yuen Ler Chow
     * @instance
     * @memberof api
     * @method listAttendees
     * @param query object containing query information such as web name and email
     * @returns list of attendee objects {@link https://app.swaggerhub.com/apis-docs/Trumba/Trumba-Management-API/2.0#/Registration/listAttendee}
     */
    var listAttendees = function (query) { return __awaiter(void 0, void 0, void 0, function () {
        var webName, email, status, startDate, endDate, params, data, err_3, responseData;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    webName = query.webName, email = query.email, status = query.status, startDate = query.startDate, endDate = query.endDate;
                    params = {
                        webName: webName,
                        email: email,
                        status: status,
                        startdate: startDate === null || startDate === void 0 ? void 0 : startDate.toISOString(),
                        enddate: endDate === null || endDate === void 0 ? void 0 : endDate.toISOString(),
                    };
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.get('https://www.trumba.com/api/v2/attendees', {
                            params: params,
                            auth: auth
                        })];
                case 2:
                    data = (_b.sent()).data;
                    return [2 /*return*/, data];
                case 3:
                    err_3 = _b.sent();
                    responseData = (_a = err_3 === null || err_3 === void 0 ? void 0 : err_3.response) === null || _a === void 0 ? void 0 : _a.data;
                    if (!responseData) {
                        // No information on the error
                        // (this is an unknown error)
                        throw new TrumbaError_1.default({
                            message: 'An unknown error occurred.',
                            code: ErrorCode_1.default.UnknownError,
                        });
                    }
                    throw new TrumbaError_1.default({
                        message: responseData[responseData.length - 1].errorMessage,
                        code: trumbaCodeMessageMap_1.default[responseData[responseData.length - 1]],
                    });
                case 4: return [2 /*return*/];
            }
        });
    }); };
    // Return api instance
    var trumbaAPI = {
        listEvents: listEvents,
        listAttendees: listAttendees,
        registerForEvent: registerForEvent,
    };
    return trumbaAPI;
};
exports.default = initTrumbaAPI;
//# sourceMappingURL=index.js.map