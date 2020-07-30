import React, { useState, useEffect, useCallback } from 'react';
import { Modal, FlatList } from 'react-native';
import Text from '../Base/Text';
import NumberRow from '../Common/NumbersRow';
import { Container, ModalClose, Title, RowContainer } from './indexUI';

// The number of the items loaded each time
const moreItems = 20;

/** Returns a subset of the original array */
const getArraySubset = (listItemsNum: number, logs: array): array => {
  // If the pointer is smaller than the array size
  if (listItemsNum < logs.length) {
    // Return the subset of the array
    return logs.slice(1, listItemsNum);
  }
  // Otherwise return the original array
  return logs;
};

type NumbersRegistration = { list: array, time: number };

interface FProps {
  visible: boolean,
  hide: () => void,
  logs: NumbersRegistration[]
}
/**
 * Opens a Modal and presents the logs History
 * @visible - {boolean}: The modal / list render status
 * @hide - {function}: Closes the modal
 * @logs - {Array of objects}: The data to be presented
 */
const HistoryLogsModal: React.FC<FProps> = ({
  visible,
  hide,
  logs
}) => {
  /** The number of items that will be rendered */
  const [listItemsNum, setListItemsNum] = useState<number>(moreItems);

  useEffect(() => {
    // Whenever prop visible turns to false
    if (!visible) {
      // Reset the number of items to be rendered
      setListItemsNum(moreItems);
    }
  }, [visible]);
  /** Function increases the variable of items to be rendered */
  const increaseListItemsNum = useCallback(() => {
    setListItemsNum(listItemsNum + moreItems);
  }, [listItemsNum]);
  /** Function returns the list of items to be rendered */
  const renderLogsList = () => {
    if (visible) {
      // Gets the sub-array with the items that will be rendered (updates dynamically)
      const selectedItems = getArraySubset(listItemsNum, logs);
      return (
        <FlatList
          data={selectedItems}
          renderItem={({ item }) => (
            <RowContainer>
              <NumberRow
                numbersList={item.list}
                createdTime={item.time}
                itemSize="90px"
                fontSize="22px"
              />
            </RowContainer>
          )}
          keyExtractor={item => `list-item-${item.time}`}
          numColumns={1}
          onEndReachedThreshold={1}
          // on end reached: Increase the items to be rendered
          onEndReached={increaseListItemsNum}
        />
      );
    }
    return null;
  };

  return (
    <Modal
      transparent
      animationType="fade"
      {...{ visible }}
    >
      <Container>
        <ModalClose onPress={hide}>
          <Text>X</Text>
        </ModalClose>
        <Title>
          <Text align="center" size="18px">
            History Logs
          </Text>
        </Title>
        {renderLogsList(logs, visible)}
      </Container>
    </Modal>
  );
};

export default React.memo(HistoryLogsModal);
