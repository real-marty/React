import { ActionType } from "../action-types";

interface SearchReposAction {
  type: ActionType.SEARCH_REPOS;
}
interface SearchReposSucessAction {
  type: ActionType.SEARCH_REPOS_SUCESS;
  payload: string[];
}
interface SearchReposErrorAction {
  type: ActionType.SEARCH_REPOS_ERROR;
  payload: string;
}

export type Action =
  | SearchReposAction
  | SearchReposSucessAction
  | SearchReposErrorAction;
