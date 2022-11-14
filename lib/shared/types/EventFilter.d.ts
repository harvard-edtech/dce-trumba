declare type EventFilter = {
    numEvents?: number;
    eventIds?: number[];
    startDate?: Date;
    endDate?: Date;
    months?: number;
    weeks?: number;
    days?: number;
    previousWeeks?: number;
    filterView?: string;
    search?: string;
    html: boolean;
    customNotes?: boolean;
};
export default EventFilter;
