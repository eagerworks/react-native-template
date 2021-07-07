import SignInInfo from '@models/SignInInfo';

interface ReduxCall {
  type: string;
  payload: { userInfo?: SignInInfo; token?: string; error?: string };
}

interface State {
  token: string;
  error: string;
  loading: boolean;
}

export type { ReduxCall, State };
