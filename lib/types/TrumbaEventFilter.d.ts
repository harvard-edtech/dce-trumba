/**
 * Filter for listing events
 * @author Yuen Ler Chow
 */
declare type TrumbaEventFilter = {
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
export default TrumbaEventFilter;
