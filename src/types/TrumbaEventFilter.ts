/**
 * Filter for listing events
 * @author Yuen Ler Chow
 */
type TrumbaEventFilter = {
  // number of events to return
  numEvents?: number;
  // list of event ids to return
  eventIds?: number[];
  // start date of events to return
  startDate?: Date;
  // end date of events to return
  endDate?: Date;
  // number of months to return
  months?: number;
  // number of weeks to return
  weeks?: number;
  // number of days to return
  days?: number;
  // number of previous weeks to return
  previousWeeks?: number;
  // filter view to use
  filterView? : string;
  // search query
  search?: string;
  // whether to return HTML
  html: boolean;
  // whether to return custom notes in the source course
  customNotes?: boolean;
}

export default TrumbaEventFilter;
