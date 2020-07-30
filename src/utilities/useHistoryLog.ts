import { useState, useEffect } from 'react';
/**
 * Custom Hook keeps log history of generated numbers
 * @param {object} newRegistration - The new registration to be added to logs
 */
interface Registration { list: array, time: array }

export default function useHistoryLog(newRegistration: Registration): Array {
  const [numbersHistory, setNumbersHistory] = useState([]);
  // Whenever a registration is reveived,
  useEffect(() => {
    const lastLogItem = numbersHistory[numbersHistory.length - 1] || {};
    // It checks if its a new registration
    if (newRegistration && newRegistration.time !== lastLogItem.time) {
      // and appends it to the logs state
      const newNumbersLog = numbersHistory.concat([newRegistration]);
      setNumbersHistory(newNumbersLog);
    }
  }, [newRegistration, numbersHistory]);
  // Returns updated logs
  return numbersHistory;
}
