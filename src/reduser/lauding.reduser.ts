import React from 'react';
import { AnyAction } from 'redux';

export const LoadingReduser = (state = false, action: AnyAction) => {
    if (action.type === 'LOADING') {
        state = action.payload
    }
    return state
}
export const loadingReduser = (state: any) => state.LoadingReduser