declare type AttendeeQuery = {
    webName: string;
    email: string;
    status?: string;
    startDate?: Date;
    endDate?: Date;
};
export default AttendeeQuery;
