/**
 * Custom field for a trumba event
 * @author Yuen Ler Chow
 */
type TrumbaCustomField = {
  // Unique ID number for the custom field
  fieldID: number,
  // The custom field label
  label: string,
  // The custom field value
  value: string,
  // The field type ID
  type: number,
}

export default TrumbaCustomField;
