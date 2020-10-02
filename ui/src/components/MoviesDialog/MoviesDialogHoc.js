import { deleteMovieMutation } from "./mutations";
import { moviesQuery } from "../MoviesTable/queries";
import { graphql } from "react-apollo";
import { compose } from "recompose";

const withGraphqlDelete = graphql(deleteMovieMutation, {
  props: ({ mutate }) => ({
    deleteMovie: (id) =>
      mutate({
        variables: id,
        refetchQueries: [
          {
            query: moviesQuery,
            variables: { name: "" },
          },
        ],
      }),
  }),
});

export default compose(withGraphqlDelete);
