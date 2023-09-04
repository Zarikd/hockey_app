import {createAsyncThunk} from '@reduxjs/toolkit'
import {AppDispatch, RootState} from '..';

const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispatch
  rejectValue: string
}>()

export default createAppAsyncThunk

