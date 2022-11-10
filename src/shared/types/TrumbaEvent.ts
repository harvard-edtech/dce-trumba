type CustomField = {
  fieldID: number,
  label: string,
  value: string,
  type: number,
}


type TrumbaEvent = {
  eventID: number,
  template: string,
  title: string,
  description: string,
  locationType: 'In-Person' | 'Online' | 'Hybrid',
  location: string,
  webLink: string,
  startDateTime: string,
  endDateTime: string,
  dateTimeFormatted: string,
  allDay: boolean,
  startTimeZoneOffset: string,
  endTimeZoneOffset: string,
  canceled: boolean,
  openSignUp: boolean,
  reservationFull: boolean,
  pastDeadline: boolean,
  pastCancelDeadline: boolean,
  requiresPayment: boolean,
  refundsAllowed: boolean,
  waitingListAvailable: boolean,
  signUpUrl: string,
  customFields: CustomField[],
  permaLinkUrl: string,
  eventActionUrl: string,
  categoryCalendar: string,
  registrationTransferTargetCount: number,
  regAllowChanges: boolean
}

export default TrumbaEvent;