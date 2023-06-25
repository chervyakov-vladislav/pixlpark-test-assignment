import React from 'react';
import { CommentInterface } from '@/widgets';
import { formatTimestamp, getArticlesArray } from '@/shared';

export const useOneComment = (data: CommentInterface) => {
  const [childrenLoading, setChildrenLoading] = React.useState(false);
  const [childernData, setChildrenData] = React.useState<CommentInterface[]>([]);
  const formattedDate = formatTimestamp(data.time);
  const htmlCode = data.text;
  const children = data.kids ?? [];

  const handleLoadChildren = async (childs: number[]) => {
    setChildrenLoading(true);
    const res = await getArticlesArray(childs);
    setChildrenData(() => res);
    setChildrenLoading(false);
  };

  return {
    ...data,
    formattedDate,
    htmlCode,
    children,
    handleLoadChildren,
    childrenLoading,
    childernData,
  };
};
