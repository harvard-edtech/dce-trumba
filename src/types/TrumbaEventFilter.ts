/**
 * Filter for listing events
 * @author Yuen Ler Chow
 */
type TrumbaEventFilter = {
  // The maximum number of events to return
  numEvents?: number;
  // Return a multiple events by a list of comma seperated event IDs
  eventIds?: number[];
  // Return events starting on or after this date. This value is formatted YYYYMMDD
  startDate?: Date;
  // Return events ending before after this date. This value is formatted YYYYMMDD
  endDate?: Date;
  // number of months to return
  months?: number;
  // number of weeks to return
  weeks?: number;
  // number of days to return
  days?: number;
  // Number of weeks previous to the specified date to return
  previousWeeks?: number;
  // Return only events that match a pre-defined filter view
  filterView? : string;
  // Return only events that contain a search term
  search?: string;
  // Whether to include HTML code in event fields
  html: boolean;
  // Whether to include the custom field values at the top of the description field
  customNotes?: boolean;
}

export default TrumbaEventFilter;
