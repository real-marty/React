interface ReposState {
  loading: boolean;
  error: string | null;
  data: string[];
}
interface SearchReposAction {
  type: "search_repositories";
}
interface SearchReposSucessAction {
  type: "search_repositories_sucess";
  payload: string[];
}
interface SearchReposErrorAction {
  type: "search_repositories_error";
  payload: string;
}

const reducer = (
  state: ReposState,
  action: SearchReposAction | SearchReposSucessAction | SearchReposErrorAction
): ReposState => {
  switch (action.type) {
    case "search_repositories":
      return { loading: true, error: null, data: [] };
    case "search_repositories_sucess":
      return { loading: false, error: null, data: action.payload };
    case "search_repositories_error":
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};
export default reducer;
