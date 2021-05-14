import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';

export default function useActions<T>(dispatch: Dispatch, actions: T) {
  const { ...action } = actions;

  return useMemo(() => bindActionCreators(action as any, dispatch), [
    action,
    dispatch,
  ]) as typeof actions;
}
