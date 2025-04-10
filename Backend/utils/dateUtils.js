// utils/dateUtils.js
import dayjs from 'dayjs';

/**
 * Calculates age from date of birth.
 * @param {string} dob - Date of birth in 'YYYY-MM-DD' format
 * @returns {number} Age in years
 */
export const calculateAge = (dob) => {
  if (!dob) return 0;
  return dayjs().diff(dayjs(dob), 'year');
};

/**
 * Format a date string into a readable format
 * @param {string} date - Date in any valid format
 * @param {string} format - Desired output format (default: 'DD-MM-YYYY')
 * @returns {string} Formatted date
 */
export const formatDate = (date, format = 'DD-MM-YYYY') => {
  return dayjs(date).format(format);
};

/**
 * Get today's date in YYYY-MM-DD format (useful for default inputs)
 */
export const getToday = () => {
  return dayjs().format('YYYY-MM-DD');
};
