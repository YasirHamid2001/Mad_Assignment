import React from 'react';
import { View, StyleSheet } from 'react-native';

const ChessBoard = () => {
  const renderSquare = (row, col) => {
    const isEvenRow = row % 2 === 0;
    const isEvenCol = col % 2 === 0;
    const isDarkSquare = (isEvenRow && !isEvenCol) || (!isEvenRow && isEvenCol);
    const squareColor = isDarkSquare ? styles.darkSquare : styles.lightSquare;

    return <View style={[styles.square, squareColor]} key={`${row}${col}`} />;
  };

  const renderRow = (row) => {
    const squares = [];
    for (let col = 0; col < 8; col++) {
      squares.push(renderSquare(row, col));
    }
    return <View style={styles.row} key={row}>{squares}</View>;
  };

  const renderBoard = () => {
    const rows = [];
    for (let row = 0; row < 8; row++) {
      rows.push(renderRow(row));
    }
    return <View style={styles.board}>{rows}</View>;
  };

  return (
    <View style={styles.container}>
      {renderBoard()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  board: {
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 40,
    height: 40,
  },
  lightSquare: {
    backgroundColor: 'white',
  },
  darkSquare: {
    backgroundColor: 'gray',
  },
});

export default ChessBoard;
