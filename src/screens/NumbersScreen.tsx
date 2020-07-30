import React, { useState, useCallback } from 'react';
import styled from 'styled-components/native';
import ReduxConnector from '../state/connector';
import useHistoryLog from '../utilities/useHistoryLog';
import colors from '../constants/Colors';
import Header from '../components/Header';
import HistoryButton from '../components/Base/Button';
import NumbersGenerator from '../components/NumGenerator';
import HistoryLogsModal from '../components/HistoryLogsModal';

const Container = styled.View`
  flex: 1;
  width: 100%;
`;
/** The bottom screen field */
const BottomField = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

type NumbersRegistration = { list: array, time: number };

interface FProps {
  generatedNumbers: NumbersRegistration[],
  setGeneratedNumbers: (numbers: number[]) => void
}
/**
 * Numbers Main Screen
 * @generatedNumbers - {state object}: Consists of a numbers lists and timestamp
 * @setGeneratedNumbers - {redux func}: To save numbers to state
 */
const NumbersScreen: React.FC<FProps> = ({
  generatedNumbers,
  setGeneratedNumbers
}) => {
  /** Custom hook adds new set of numbers to logs history */
  const logs = useHistoryLog(generatedNumbers);
  /** Show - hide logs modal */
  const [logsVisible, setLogsVisible] = useState<boolean>(false);
  /** Function that opens the logs modal */
  const showLogs = useCallback(() => {
    // Open modal only if it has content
    if (logs.length > 0) {
      setLogsVisible(true);
    }
  }, [logs]);
  /** Function that closes the logs modal */
  const hideLogs = useCallback(() => {
    setLogsVisible(false);
  }, []);

  return (
    <Container>
      <Header />
      <NumbersGenerator
        numbersList={generatedNumbers.list}
        createdTime={generatedNumbers.time}
        {...{ setGeneratedNumbers }}
      />
      <BottomField>
        <HistoryButton
          square
          height="50px"
          color={colors.primaryTint}
          title="SHOW LOG"
          onPress={showLogs}
        />
      </BottomField>
      <HistoryLogsModal
        visible={logsVisible}
        hide={hideLogs}
        {...{ logs }}
      />
    </Container>
  );
};

export default ReduxConnector(NumbersScreen);
