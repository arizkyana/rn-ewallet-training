import React from 'react';

import Typography from '@components/Typography';
import {
  LastTransactionStyled,
  LastTransactionListView,
  LastTransactionItem,
} from '../home.styled';

const transactionData = [
  {
    id: '1',
    title: 'Jajan',
  },
  {
    id: '2',
    title: 'Minuman',
  },
  {
    id: '3',
    title: 'Ojek',
  },
];

function LastTransaction() {
  // { item: { id: string, title: string } }
  const renderItem = ({ item }: { item: unknown }) => {
    const i = item as { id: string; title: string };
    return (
      <LastTransactionItem>
        <Typography children={i.title} />
      </LastTransactionItem>
    );
  };

  return (
    <LastTransactionStyled>
      <Typography variant="title" children="Transaksi terakhir" />
      <LastTransactionListView
        data={transactionData}
        renderItem={renderItem}
        keyExtractor={(item: unknown) => {
          const i = item as { id: string; title: string };
          return i.id;
        }}
      />
    </LastTransactionStyled>
  );
}

export default LastTransaction;
